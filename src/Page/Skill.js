import React from 'react'
import './skill.css';
import BottomLine from '../components/BottomLine'

function Skill() {
  return (
    <>
    <div className='bottom-div'>
      <h1 className='hading'>My Skill</h1>
      <BottomLine />
    </div>
       <div class="skills">
        <div class="skills-bar">
          <div class="bar">
            <div class="info">
              <span>HTML5</span>
            </div>
            <div class="progress-line"><span class="html"></span></div>
            <div class="bar">
              <div class="info">
                <span>CSS3</span>
              </div>
              <div class="progress-line"><span class="css"></span></div>
              <div class="bar">
                <div class="info">
                  <span>BOOTSTRAP</span>
                </div>
                <div class="progress-line"><span class="bootstrap"></span></div>
                <div class="bar">
                  <div class="info">
                    <span>JAVASCRIPT</span>
                  </div>
                  <div class="progress-line">
                    <span class="javascript"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>REACT JS</span>
                    </div>
                    <div class="progress-line"><span class="c"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-bar">
          <div class="bar">
            <div class="info">
              <span>NEXT JS</span>
            </div>
            <div class="progress-line"><span class="html"></span></div>
            <div class="bar">
              <div class="info">
                <span>EXPRESS JS</span>
              </div>
              <div class="progress-line"><span class="css"></span></div>
              <div class="bar">
                <div class="info">
                  <span>MONGO DB</span>
                </div>
                <div class="progress-line"><span class="bootstrap"></span></div>
                <div class="bar">
                  <div class="info">
                    <span>NODE JS</span>
                  </div>
                  <div class="progress-line">
                    <span class="javascript"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>GITHUB</span>
                    </div>
                    <div class="progress-line"><span class="c"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Skill
