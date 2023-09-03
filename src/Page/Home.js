import React from 'react'
import './Home.css';
import About from './About';
import Projects from './Projects';
import Skill from './Skill';
import GIF from '../images/gif.gif'
import Contact from './Contact';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='hiro-section'>
          <span className='taxt_1'>Hallo,</span>
         <div className='taxt_2'> <span>I</span>
          <span>'</span>
          <span>am</span>
          <span className='by'> A</span>
          <span>s</span>
          <span>h</span>
          <span>o</span>
          <span>k</span>
          <span> !</span>
          <img src={GIF} alt="Hello" className='gif'/>
          </div>
          <div className='taxt_3'>
            <span>welcomp to my portfolio</span>
            </div>    
          </div>
      </div>
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
    </>
  )
};

export default Home;