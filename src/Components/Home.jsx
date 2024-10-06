import React from 'react'

import { Typewriter } from 'react-simple-typewriter'
import {AiOutlineLinkedin,AiFillGithub} from "react-icons/ai"
import Pic from "./aman3.jpg"
import file from "./File/Resume.pdf"
import Download from './Handleclick'


import "../css/Home3.css"

const Home = () => {

  // const navigate = useNavigate()
 
  return (
    <div  className='mainhome' id="home" >

        <div className='homefirst' >

           <div className='first1' id="user-detail-name" >
              Hi, I am Aman Kumar Maurya.
           </div>


           <div className='first2'>
           <span style={{ color: 'rgb(199, 192, 192)', fontSize:"2rem" }}>
          <Typewriter
            
            words={['Full Stack Web Developer', 'Problem Solver', 'A Tech Enthusiast']}
            loop={15}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        
          />
        </span>
           </div>


           <div className='first3' >
           A self-motivated, hard-working, and ambitious Web Developer with proficiency in MERN Stack. Developing websites using JavaScript, React, Redux and Chakra UI. Looking forward to working as an accountable and competent employee in an exciting Tech company.
           </div>


           <div className='first4' >


              <a href="https://www.linkedin.com/in/aman-maurya7/" target={"_blank"}  >
                <AiOutlineLinkedin className='link' />
              </a>

              <a href="https://github.com/aman7github">
              <AiFillGithub  className='git'/>
              </a>
              
              <button className='btn' id="resume-button-2" >
              <a  href={file}   download="Aman_Kumar_Maurya_Resume.pdf" id="resume-link-2" onClick={Download} >

                Resume
                </a>
                </button>
             
           </div>




        </div>

        <div  className='homesecond'>
        
         <div className='PicdivHome' >
           <img src={Pic} alt="profile"   className="home-img" />
         </div>

        </div>



    </div>
  )
}

export default Home