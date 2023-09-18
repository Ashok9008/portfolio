import React from 'react'
import './projacts.css';
import Img5 from '../images/img-5.png'
import Img6 from '../images/img-6.png'
import todo from '../images/todo.png'
import BottomLine from '../components/BottomLine';
// import { Link } from 'react-router-dom';


const Projects = () => {
  return (
    <>
    <div className='bottom-div'>
    <h1 className='heading'>My projacts</h1>
      <BottomLine />
    </div>
      <div className='main'>
        <div className="card">
          <div className="image">
            <img src={todo} alt="" />
          </div>
          <div className="text">
            <h2>Todo list</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo fugiat velit 4 odio laudantium ad doloremque maiores  aut quas excepturi voluptates?</p>
            <div className="button">
             <a href="https://github.com/Ashok9008/Todo-list" target='blank' className="btn1 black circular">GITHUB</a>
            <a href="https://todo-list-git-main-ashok9008.vercel.app/" target='blank' className="btn1 black circular">PERVIEW</a>
          </div>
          </div>
          
        </div>
        <div className="card">
          <div className="image">
            <img src={Img6} alt="" />
          </div>
          <div className="text">
            <h2> Food lab</h2>
            <p>This Is Foodlab Webpage, it was Make In Only HTML5 And CSS3, Foodlab Is Fully Responsive Webpage, Foodlab Is My First Project in Web Development.</p>
            <div className="button">
            <a href="https://github.com/Ashok9008/Maxicon_Food" target='blank' className="btn1 black circular">GITHUB</a>
            <a href="https://maxicon-food.vercel.app/" target='blank' className="btn1 black circular">PERVIEW</a>
          </div>
          </div>
          
        </div>
        <div className="card">
          <div className="image">
            <img src={Img5} alt="" />
          </div>
          <div className="text">
            <h2>Portfolio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo fugiat velit 4 odio laudantium ad doloremque maiores  aut quas excepturi voluptates?</p>
            <div className="button">
            
            <a href="https://github.com/Ashok9008/portfolio" target='blnak ' className="btn1 black circular">GITHUB</a>
            <a href="https://portfolio-git-main-ashok9008.vercel.app/" target='blank' className="btn1 black circular">PERVIEW</a>
              
          </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Projects
