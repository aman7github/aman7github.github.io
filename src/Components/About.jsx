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
           <img  className='animationPicAMAN' src="https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966" alt="ani" />
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