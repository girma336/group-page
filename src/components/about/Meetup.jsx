import React from 'react'
import { GrView } from 'react-icons/gr'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { IoMdShare } from 'react-icons/io'
import { Card, Image } from 'react-bootstrap';
import { MdOutlineLocationOn } from 'react-icons/md';
import Meet from './../../assets/meet.png';
import './About.css';

const Meetup = ({data, index, setThreeDot, threeDot}) => {
  return (
    <div>
        <Card className='card-main'>
          <Card.Img variant="top" src={data.image} />
          <Card.Body style={{ textAlign: 'left' }}>
            <Card.Title className='card-type'>
              {data.icon} {data.type}
            </Card.Title>
            <div className='title-dot'>
              <Card.Title className='card-tilte'>
                {data.title}
              </Card.Title>
              <div className='horizontal-bar'
                onClick={() => setThreeDot(index)}
              >
                <HiOutlineDotsHorizontal />
              </div>
              {threeDot === index && (
                <div className='three-dot'>
                  <p>Edit</p>
                  <p>Report</p>
                  <p>Option 3</p>
              </div>)}
            </div>
            <Card.Text
             className='meet-text'>
              <Image className='meet-image'
                src={Meet}
              />
              {data.date} 
              <span style={{  marginLeft: '20px' }}> 
                <MdOutlineLocationOn /> {data.location}
            </span>
            </Card.Text>
          </Card.Body>
          <div className='visit-web'>
            Visit Website
          </div>
          <div className='user-photo'>
            <div className='photo-div' >
              <Image
                className='photo-image'
                src={data.phote}
                roundedCircle
              />
              <Card.Title
                className='card-user'>
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
              <Card.Title
                className='card-view'>
                <GrView /> {data.view} views
              </Card.Title>
              <div
                className='share-div'>
                <IoMdShare />
                <span className='share-none'>share</span>
              </div>
            </div>
          </div>
        </Card>
    </div>
  )
}

export default Meetup