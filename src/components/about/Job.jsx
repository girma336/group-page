import React from 'react'
import { GrView } from 'react-icons/gr'
import { Card, Image } from 'react-bootstrap';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoMdShare } from 'react-icons/io';
import { MdOutlineLocationOn } from "react-icons/md";
import Document from './../../assets/docment.png';
import './About.css';

const Job = ({data, index, setThreeDot, threeDot}) => {
  return (
    <div>
        <Card
         className='card-main'
        >
          <Card.Body style={{ textAlign: 'left' }}>
            <Card.Title
              className='card-type'
            >
              {data.icon} {data.type}
            </Card.Title>
            <div
             className='title-dot'>
              <Card.Title className='card-tilte'>
                {data.title}
              </Card.Title>
              <div
                className='horizontal-bar'
                onClick={() => setThreeDot(index)}
              >
                <HiOutlineDotsHorizontal />
              </div>
              {threeDot === index && (
                <div className='three-dot'
                >
                  <p>Edit</p>
                  <p>Report</p>
                  <p>Option 3</p>
              </div>)}
            </div>
            <Card.Text
              className='meet-text'
            >
              <Image
                className='meet-image'
                src={Document}
              />
              {data.company} 
              <span style={{  marginLeft: '1px' }}> 
                <MdOutlineLocationOn /> {data.location}
            </span>
            </Card.Text>
          </Card.Body>
          <div
            className='visit-web apply-on'
            >
            Apply on TimesJob
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

export default Job