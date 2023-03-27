import React from 'react'
import {BsGithub,BsLinkedin} from "react-icons/bs"

import "../css/Contact.css"

const Contact = () => {
  return (
    <div className='contact' id="contact" >
     <p className='contactP1' >Intrested In Work Together?</p>

     <div className='icondivcontact' >
          <p className='contactP2' >Contact Me</p>
          <div className='emailContact' id="contact-email" >Email - amanmaurya9044@gmail.com</div>
          <div className='emailContact'  id="contact-phone" >Mobile No - +91 8795543317</div>
          <div className='iconsContact' >
           
           <a href="https://github.com/aman7github" >
           <div className='git' id="contact-github" > <BsGithub /> </div>
         
           </a>
           <a href="https://www.linkedin.com/in/aman-maurya-83a196263" >
           <div className='link'  id="contact-linkedin" > <BsLinkedin /> </div>
           </a>
          
      </div>

     </div>

    </div>
  )
}

export default Contact