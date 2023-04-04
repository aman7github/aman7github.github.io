import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from './Components/About';
import Project from './Components/Project';
// import Project2 from './Components/Project2';
import Git from "./Components/Git"
import Skills from "./Components/Skills"
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
       <Navbar /> 
      <Home />
      <About />
      <Project />
      <Git />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;

