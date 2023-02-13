import React from 'react'
import {BsGithub,BsLinkedin} from "react-icons/bs"
import "../css/Contact.css"

const Contact = () => {
  return (
    <div className='contact' id="contact" >
     <p className='contactP1' >Intrested In Work Together?</p>

     <div className='icondiv' >
          <p className='contactP2' >Contact Me</p>
          <div className='email' id="contact-email" >Email - amanmaurya9044@gmail.com</div>
          <div className='email'  id="contact-phone" >Mobile No - +91 8795543317</div>
          <div className='icons' >
          <div className='git' id="contact-github" > <BsGithub /> </div>
          <div className='link'  id="contact-linkedin" > <BsLinkedin /> </div>
      </div>

     </div>

    </div>
  )
}

export default Contact