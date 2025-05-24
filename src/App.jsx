// App.jsx
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skils';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Background from '../../public/background1.jpg'
function App() {
  return (
    //   <div
    //  className="bg-[url('/background1.jpg')] bg-cover bg-no-repeat bg-fixed bg-center text-white min-h-screen"
    //  >
    <div >
      <Navbar />
      <div id="Home">
        <HomePage />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Projects">
        <Projects />
      </div>
        <div id="Contact">
        <Contact />
      </div>
 </div>
 //   </div>
  );
}

export default App;
