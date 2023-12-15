import React, { useState } from 'react';
import './NavBar.css';
import Logo from './../../assets/logo.webp';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md"
import { FaCircle, FaSortDown } from "react-icons/fa";
import { RiRectangleFill } from "react-icons/ri";
import Login from '../sessions/Login';
import Signup from '../sessions/Signup';


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [sessionIn, setSessionIn] = useState(false);
  const [sessionUp, setSessionUp] = useState(false);

  const handleSinupandIn = () => {
    setToggle(!toggle);
  }

  const handleSessionSignup = () => {
    setSessionUp(true)
    setToggle(false)
  }

  const handleSessionLogin = () => {
    setSessionIn(true)
    setToggle(false)
  }
  
  return (
    <>
    <div className='fixed-position'>
      <div className="containers">
        <div>
          <img className="logo" src={Logo} alt="logo of atl" />
        </div>
        <div>
          <div className="search-bar">
            <IoIosSearch className='search-icon' />
            <input placeholder='Search your favorite group in ATG' />
          </div>

        </div>
        <div>
          <p className="create-account">
            Create Account.
            <span className="create-account-span">It`s free</span>
            <MdOutlineArrowDropDown className='down-icon' onClick={() => handleSinupandIn()}/>
          </p>

        </div>
      </div>
    </div>
    <div className='mobile-header'>
      <div className='header'>
        <div className='rectangel box'><RiRectangleFill style={{ fontSize: '16px' , color: '#868E96'}} /></div>
        <div className='circle box'><FaCircle style={{ fontSize: '14px', marginLeft: '10px', color: '#868E96'}} /></div>
        <div className='triangle box'><FaSortDown style={{ fontSize: '30px', marginLeft: '2px', marginTop: '-13px', color: '#868E96'}} /></div>
      </div>
    </div>
    {toggle && 
      <div className='toogle-btn'>
        <div className='toggle-flex'>
        <span className="create-account-span signin-up" onClick={() => handleSessionSignup()}>Sign Up</span>
        <span className="create-account-span signin-up" onClick={() => handleSessionLogin()}>Sign In</span>
        </div>
      </div>
    }

    {sessionIn && (<Login  setSessionIn={setSessionIn} />)}
    {sessionUp && (<Signup setSessionUp={setSessionUp} />)}
    </>
  );
};

export default NavBar;