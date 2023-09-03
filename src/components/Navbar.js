import React, { useState } from 'react'
import "./Navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
// import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Navbar = () => {
  const [showMediaIcons, setshowMediaIcons] = useState(false);
  const toggleDrawer = () => {
    setshowMediaIcons((prevState) => !prevState)
  };
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>A</span>shok
            <span>M</span>ahajan
          </h2>
        </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/skill'>Skill</Link></li>
            <li><Link to='/contact'>Contect</Link></li>
          </ul>
        </div>
        <div className='social-media'>
          <ul className='social-media-desktop'>
            <li> <a href='https://www.youtube.com/' target='ashok'><FaYoutubeSquare className='youtube' /></a> </li>
            <li><a href='https://www.instagram.com/' target='ashok'><FaInstagramSquare className='instagram' /></a></li>
            <li><a href='https://www.facebook.com/' target='ashok'><FaFacebookSquare className='facebook' /></a></li>
          </ul>
        </div>
        
        <div className='hamburger-menu'>
          <div onClick={toggleDrawer} >
          <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar
