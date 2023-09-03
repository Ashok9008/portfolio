import React from 'react'
import './About.css';
import Profile from '../images/img.1.png'
import BottomLine from '../components/BottomLine'
function About() {
  return (
    <>
        <div className='bottom-div'>
            <h1 className='about-h'>About Me</h1>
            <BottomLine/>
        </div>
        <div className="main">
            <div  className='profile'>
                <img src={Profile} alt="Ashok Mahajan"/>
            </div>
            <div className="about">
                <h1 className='about-h'>Ashok Mahajan</h1>
                <p>
                    As a MERN stack developer, I am committed to building high-quality web applications that meet the needs of my clients. With years of experience in full-stack web development, I specialize in using React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to create scalable and robust web applications.
                </p>
                <p>
                    My passion for solving complex problems and creating innovative solutions drives me to stay up-to-date with the latest  technologies and trends in the industry.
                </p>

                <h1><span> Name : </span>Ashok Mahajan</h1>
                <h1><span> Phone : </span>7490080753</h1>
                <h1><span> Email : </span>mahajanashok0709@gmail.com</h1>
                <h1><span> Address : </span>Surat,Gujarat,India</h1>
            </div>
        </div>
    </>
  )
}

export default About
