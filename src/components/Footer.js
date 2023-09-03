import React from 'react'
import './footer.css'
import {FaFacebook, FaLinkedin, FaTwitter, FaGithub}from 'react-icons/fa';


function footer() {
  return (
    <>
    <footer class="footer-distributed">

<div class="footer-left">

  <h3>Company<span>logo</span></h3>

  <p class="footer-links">
    <a href="/" class="link-1">Home</a>
  
    <a href="/About">About</a>
  
    <a href="/Projects">Projects</a>
    
    <a href="/Skill">Skill</a>
    
    <a href="/Contact">Contact</a>
  </p>

  <p class="footer-company-name"></p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span></span> Surat,Gujarat,india</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+917490080753</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <h4>mahajanashok0709@gmail.com</h4>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the portfolio</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

  <div class="footer-icons">

    <a href="https://www.facebook.com/" target='blank'><i class="FaFacebook"> <FaFacebook/></i></a>
    <a href="https://twitter.com/login?lang=en" target='blank'><i class="fa fa-twitter"><FaTwitter/></i></a>
    <a href="https://in.linkedin.com/" target='blank'><i class="fa fa-linkedin"><FaLinkedin/></i></a>
    <a href="https://github.com/" target='blank'><i class="fa fa-github"><FaGithub/></i></a>

  </div>

</div>

</footer>
    </>
  )
}

export default footer
