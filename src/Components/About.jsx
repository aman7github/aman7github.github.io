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
          <p className='P2AMAN'id="user-detail-intro"  >A self-motivated, hard-working, and ambitious Web Developer with proficiency in MERN Stack. Developing websites using JavaScript, React, Redux, MongoDB and Chakra UI. 1200+ hours of coding and hands-on experience in developing various Web-Apps and programs. Looking forward to working as an accountable and competent employee in an exciting tech company.</p>
        </div>

      </div>
      
    </div>
  )
}

export default About