import React from 'react'
import Ind from "./pro.png"
import Zoom from "./Zoom.png"
import Sales from "./Sales.png"
import "aos/dist/aos.css";
import Aos from 'aos';
import "../css/Product.css"


const Project = () => {

  React.useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <div className='ProjetContainer'  id="projects" >

   <p className='firsrP' >Built By Me !</p>
   <p className='secondP' >Each Project is Unique. Here are some of my works.</p>

   <div  className="project-card" data-aos="fade-down" >
    <div className='Pro1a' >
        <img src={Ind} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title'  >DoorStep Clone</p>
      <p className='project-description' > Doorstep allows users to buy voucher and coupons. It has a various categories. It shows all the services which are available near to the user's location.</p>
      <p className='Pr2' >An Individual Project executed in 5 days.</p>
      <p className='project-tech-stack' >TECH STACKS - HTML | CSS | JavaScript | React | Redux | MongoDB | Chakra UI</p>

      <div className='btnDiv' >
        <a href="https://doorstep-iota.vercel.app/"  >
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/KaustubhN12/dizzy-stitch-9009">
        <button className='project-github-link'  >Source Code</button>
        </a>
      </div>

    </div>
   </div>




   <div className="project-card"  data-aos="fade-down" >
    <div className='Pro1a' >
        <img src={Zoom} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title' >ZoomCar Clone</p>
      <p className='project-description' > Zoomcar provides car rentals for music events, short trips within the city, trips with friends, trips with family, temple visits, long-duration trips, short-duration trips, road trips with friends and family & much more!</p>
      <p className='Pr2' >An Individual Project executed in 5 days.</p>
      <p className='project-tech-stack' >TECH STACKS -  HTML | CSS | JavaScript | React | Chakra UI</p>

      <div className='btnDiv' >
        <a href="https://myreactapp-aman7github.vercel.app/">
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/aman7github/daily-card-46">
        <button className='project-github-link' >Source Code</button>
        </a>
      </div>

    </div>
   </div>





   



    </div>
  )
}

export default Project