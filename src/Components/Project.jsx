import React from 'react'
import Ind from "./pro.png"
import Game from './game.png'
import Zoom from "./Zoom.png"
import Sales from "./Sales.png"
import "aos/dist/aos.css";
import Aos from 'aos';
import "../css/Product.css"
import Mod from "./mod.png"
import Crys from "./crys.png"


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
        <img src={Mod} alt="pic" className='pic' />
    </div>

    <div className='Pro1b' >
      <p className='project-title'  >ModeSens Clone</p>
      <p className='project-description' > ModeSens is a fashion technology company revolutionizing the way people shop online using a smart tech-forward approach..</p>
      <p className='Pr2' >An Individual Project executed in 5 days.</p>
      <p className='project-tech-stack' >TECH STACKS - HTML | CSS | JavaScript | React | Redux | MongoDB | Chakra UI | MongoBD | Node.js |Express</p>

      <div className='btnDiv' >
        <a href="https://fronted.vercel.app/" target={"_blank"} >
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/aman7github/ModeSens" target={"_blank"} >
        <button className='project-github-link'  >Source Code</button>
        </a>
      </div>

    </div>
   </div>






   <div className="project-card"  data-aos="fade-down"  >
    <div className='Pro1a' >
        <img src={Crys} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title' >Crystara</p>
      <p className='project-description' > Crystara: Your exquisite online jewelry destination. Discover stunning handpicked pieces, certified quality, and personalized assistance. Seamlessly browse, customize, and indulge in fine jewelry with secure transactions and reliable shipping</p>
      <p className='Pr2' >A collaborative project built by team of 5 members in 5 days</p>
      <p className='project-tech-stack' >TECH STACKS -  HTML | CSS | JavaScript | Next.js | Chakra UI</p>

      <div className='btnDiv' >
        <a href="https://crystara-swart.vercel.app/" target={"_blank"} >
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/Neerav-Khatri/Crystara"  target={"_blank"} >
        <button className='project-github-link' >Source Code</button>
        </a>
      </div>

    </div>
   </div>






   <div  className="project-card" data-aos="fade-down" >
    <div className='Pro1a' >
        <img src={Ind} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title'  >DoorStep Clone</p>
      <p className='project-description' > Doorstep allows users to buy voucher and coupons. It has a various categories. It shows all the services which are available near to the user's location.</p>
      <p className='Pr2' >A collaborative project built by team of 5 members in 5 days</p>
      <p className='project-tech-stack' >TECH STACKS - HTML | CSS | JavaScript | React | Redux | MongoDB | Chakra UI</p>

      <div className='btnDiv' >
        <a href="https://doorstep-iota.vercel.app/" target={"_blank"} >
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/KaustubhN12/dizzy-stitch-9009"  target={"_blank"} >
        <button className='project-github-link'  >Source Code</button>
        </a>
      </div>

    </div>
   </div>








   <div  className="project-card" data-aos="fade-down" >
    <div className='Pro1a' >
        <img src={Game} alt="pic" />
    </div>

    <div className='Pro1b' >
      <p className='project-title'  >Game-Of-Thrones</p>
      <p className='project-description' >Raja Mantri Chor Sipahi" is a classic role-based guessing game with a twist. It adds a Queen character and new rules to make gameplay more fun and exciting.</p>
      <p className='Pr2' >A collaborative project built by team of 3 members in 3 days</p>
      <p className='project-tech-stack' >TECH STACKS - HTML | CSS | JavaScript | React | Redux </p>

      <div className='btnDiv' >
        <a href="https://resplendent-conkies-994605.netlify.app/" target={"_blank"}  >
        <button className='project-deployed-link' >Live Demo</button>
        </a>
        <a href="https://github.com/aman7github/Game-Of-Thrones" target={"_blank"} >
        <button className='project-github-link'  >Source Code</button>
        </a>
      </div>

    </div>
   </div>

   



    </div>
  )
}

export default Project