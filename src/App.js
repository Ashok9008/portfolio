import Navbar from './components/Navbar';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Projects from './Page/Projects';
import Skill from './Page/Skill';
import Contact from './Page/Contact';
import Footer from './components/Footer'




function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/skill' element={<Skill />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
