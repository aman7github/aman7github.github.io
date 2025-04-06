import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css";

import "../css/About2.css"

const About = () => {

  React.useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <div  id="about" className="about section" >
      
      <div className='aboutinsideAMAN' data-aos="fade-right" >
        
        <div className='animationAMAN' >
           <img  className='animationPicAMAN' src="https://i.pinimg.com/originals/c8/94/f0/c894f05d0a176de552a9683319dedb29.gif" alt="ani" />
        </div>

        <div className='infoAMAN'  >
          <p className='P1AMAN'  >About Me</p>
          <p className='P2AMAN'id="user-detail-intro"  >A self-driven and detail-oriented Web Developer with expertise in the MERN stack. Proficient in building responsive and scalable web applications using HTML, CSS, JavaScript, React, Redux, Next.js, Node.js, Chakra UI and MongoDB. Completed 2100+ hours of hands-on training. Eager to contribute to dynamic teams and deliver high-quality, impactful digital solutions.</p>
        </div>

      </div>
      
    </div>
  )
}

export default About