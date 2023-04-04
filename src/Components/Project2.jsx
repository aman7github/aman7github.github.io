
import React from 'react'
import Ind from "./Indiegogo.png"
import Zoom from "./Zoom.png"
import Sales from "./Sales.png"
import "aos/dist/aos.css";
import "../css/Project.css";
import Aos from 'aos';


const Project2 = () => {
  return (
    <div className='ProjetContainer'  id="projects" >

   <p className='firsrP' >Built By Me !</p>
   <p className='secondP' >Each Project is Unique. Here are some of my works.</p>

   <div  className="project-card" data-aos="fade-right" >
    <div className='Pro1a' >
        <img src={Ind} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title'  >Indiegogo Clone</p>
      <p className='project-description' > Indiegogo is a crowdfunding website that offers users the opportunity to raise funds for an idea, start-up business, or charity.Indiegogo platform makes it easy for anyone to raise money for a project, non-profit startup, and personal cause.</p>
      <p className='Pr2' >An Individual Project executed in 5 days.</p>
      <p className='project-tech-stack' >TECH STACKS - HTML | CSS | JavaScript</p>

      <div className='btnDiv' >
        <a href="https://lighthearted-crisp-7cf023.netlify.app/"  >
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/aman7github/handsome-copper-4097">
        <button className='project-github-link'  >Source Code</button>
        </a>
      </div>

    </div>
   </div>




   <div className="project-card"  data-aos="fade-left" >
    <div className='Pro1a' >
        <img src={Zoom} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title' >Zoom Car Clone</p>
      <p className='project-description' > Zoomcar provides car rentals for music events, short trips within the city, trips with friends, trips with family, temple visits, long-duration trips, short-duration trips, road trips with friends and family & much more!</p>
      <p className='Pr2' >An Individual Project executed in 5 days.</p>
      <p className='project-tech-stack' >TECH STACKS -  HTML | CSS | JavaScript | React | Chakra UI</p>

      <div className='btnDiv' >
        <a href="https://thriving-buttercream-639638.netlify.app/">
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/aman7github/daily-card-46">
        <button className='project-github-link' >Source Code</button>
        </a>
      </div>

    </div>
   </div>





   <div className="project-card" data-aos="fade-right" >
    <div className='Pro1a' >
        <img src={Sales} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title' >Modesens Clone</p>
      <p className='project-description' > Automatically compare products across 500+ stores while you browse at any of our partner stores' websites. VIEW MORE. Compare Price. Offer you the largest selections and most trustworthy shopping experience online.</p>
      <p className='Pr2' >An Individual Project executed in 5 days.</p>
      <p className='project-tech-stack' >TECH STACKS - HTML | CSS | JavaScript</p>

      <div className='btnDiv' >
        <a href="https://gilded-sunshine-069a8e.netlify.app/">
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/SumitPokhriyal5/grubby-mitten-8672">
        <button className='project-github-link' >Source Code</button>
        </a>
      </div>

    </div>
   </div>




   <div className="project-card" data-aos="fade-right" >
    <div className='Pro1a' >
        <img src={Sales} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title' >Modesens Clone</p>
      <p className='project-description' > Automatically compare products across 500+ stores while you browse at any of our partner stores' websites. VIEW MORE. Compare Price. Offer you the largest selections and most trustworthy shopping experience online.</p>
      <p className='Pr2' >An Individual Project executed in 5 days.</p>
      <p className='project-tech-stack' >TECH STACKS - HTML | CSS | JavaScript</p>

      <div className='btnDiv' >
        <a href="https://gilded-sunshine-069a8e.netlify.app/">
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/SumitPokhriyal5/grubby-mitten-8672">
        <button className='project-github-link' >Source Code</button>
        </a>
      </div>

    </div>
   </div>



    </div>
  )
}

export default Project2