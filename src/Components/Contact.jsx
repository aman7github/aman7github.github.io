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
          <div className='git' id="contact-github" > <BsGithub /> </div>
          <div className='link'  id="contact-linkedin" > <BsLinkedin /> </div>
      </div>

     </div>

    </div>
  )
}

export default Contact