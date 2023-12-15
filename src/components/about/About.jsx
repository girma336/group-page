import React, { useEffect, useState } from 'react'
import './About.css';
import { posts } from '../../constants/constant';
import { Button, Form, Card, Image } from 'react-bootstrap';
import { GrView } from "react-icons/gr";
import { IoMdShare } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Meetup from './Meetup';
import Job from './Job';
import personPlas from './../../assets/porsenPals.png';

const About = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [prevPosition, setPrevPosition] = useState(0);
  const [threeDot, setThreeDot] = useState(false);
  const [filterOption, setFilterOption] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [filterClick, setFilterClick] = useState('All');


  const filterPosts = () => {
    if (filterOption === 'All') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(data => data.type === filterOption);
      setFilteredPosts(filtered);
    }
  };
  const filterPostsByClick = () => {

    if (filterClick === 'All') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(data => data.type === filterClick);
      setFilteredPosts(filtered);
    }
  };

  useEffect(() => {
    filterPosts();
  }, [filterOption]);

  useEffect(() => {
    filterPostsByClick();
  }, [filterClick]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutContainer = document.querySelector('.about-container');
      const divElement = document.getElementById('myDiv');
      if (aboutContainer && divElement) {
        const containerRect = aboutContainer.getBoundingClientRect();
        const divRect = divElement.getBoundingClientRect();


        if (divRect.top <= 71) {
          setIsFixed(true);
          setPrevPosition(containerRect.top);

        }
        if (containerRect.top >= prevPosition) {
          setIsFixed(false);
        }

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevPosition]);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };
  return (
    <div className="about-container">
      <div id='myDiv' className={`list-nav ${isFixed ? 'fixed-nav' : ''}`}>
        <div className=' desc-nav'>
          <ul>
            <li className={`${filterClick === 'All' ? 'active-all': ''}`} onClick={() => setFilterClick('All')}>All Posts {filterClick === 'All' && <><span>({filteredPosts.length})</span> <div className='active-click'></div></> }</li>
            {posts.map((item, i) => (
              <li className={`${filterClick === item.type ? 'active-all': ''}`} onClick={() => setFilterClick(item.type)} key={i}>{item.type} {filterClick === item.type && <><span>({filteredPosts.length})</span> <div className='active-click'></div></>}</li>
            ))}
          </ul>
        </div>
        <div className="button-div desc-nav">
          <div className='select-ops'>
            <Form.Select className='select-ops'>
              <option>Write a Post</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className='button-ele'>
            <Button variant="primary" ><Image src={personPlas} /> Join Group</Button>
          </div>
        </div>
        <div className="mob-nav">
          <div className='mobile-tab'>
            <p style={{ fontSize: '16px', fontWeight: 700, lineHeight: '20.8px'}}>Posts({filteredPosts.length})</p>
            <Form.Select
              value={filterOption}
              onChange={event => setFilterOption(event.target.value)}
              style={{ width: '120px', marginTop: '-15px'}}>
              <option value="All">Filter: All</option>
              {posts.map((data, i) => (
              <option key={i} value={data.type}>{data.type}</option>
              ))}
            </Form.Select>
          </div>
        </div>
      </div>
      <div>
  {filteredPosts.map((data, i) => (
    <>
      {data.type === 'Meetup' && <Meetup data={data} threeDot={threeDot} index={i}  setThreeDot={setThreeDot} />}
      {data.type === 'Job' && <Job data={data} index={i} threeDot={threeDot} setThreeDot={setThreeDot} />}
      {['Article', 'Education'].includes(data.type) && (
        <Card key={i}
          style={{  marginBottom: '10px' }}
        className='card-main'>
          <Card.Img variant="top" src={data.image} />
          <Card.Body style={{ textAlign: 'left' }}>
            <Card.Title className='card-type'>
              {data.icon} {data.type}
            </Card.Title>
            <div className='title-dot' >
              <Card.Title className='card-tilte'>
                {data.title}
              </Card.Title>
              <div
                onClick={() => setThreeDot(i)}
                className='horizontal-bar'>
                <HiOutlineDotsHorizontal />
              </div>
              {threeDot === i && (
                <div className='three-dot'>
                  <p>Edit</p>
                  <p>Report</p>
                  <p>Option 3</p>
              </div>)}
            </div>
            <Card.Text className='card-desc'
            >
              {truncateDescription(data.discription, 75)}
            </Card.Text>
          </Card.Body>
          <div className='user-photo'>
            <div className='photo-div'>
              <Image className='photo-image'
                src={data.phote}
                roundedCircle
              />
              <Card.Title className='card-user'>
                {data.user}
              </Card.Title>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'left',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Card.Title className='card-view'>
                <GrView /> {data.view} views
              </Card.Title>
              <div className='share-div'>
                <IoMdShare /> <span className='share-none'>share</span>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  ))}
</div>
    </div>
  )
}

export default About