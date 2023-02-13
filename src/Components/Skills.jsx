import React from 'react'
import "../css/Skills.css"

const Skills = () => {

   const links = [ {id:1, img:"https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"}, 
                   {id:2 , img:"https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"},
                   {id:3 , img:"https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"}, 
                   {id:4 , img:"https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"},
                   {id:5 , img:"https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"},
                   {id:6 , img:"https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"},
                   {id:7 , img:"https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"},
                   {id:8 , img:"https://gayathry-portfolio.vercel.app/ts.png"},
                   {id:9 , img:"https://chiranjeev-thapliyal.vercel.app/svg/git.svg"},
                   {id:10 , img:"https://chiranjeev-thapliyal.vercel.app/svg/material-ui.svg"}, 
                   {id:11 , img:"https://chiranjeev-thapliyal.vercel.app/svg/mysql-logo.svg"},
                    {id:12, img:"https://img.icons8.com/color/70/null/chakra-ui.png"} ]




  return (
    <div className='skill' id="skills" >
    
    <p className='skillP' >Skills</p>

    <div className='skillinside' >

       {
        
        links.map((el)=>{
            return <div key={el.id} className="skills-card" >
                     <img src={el.img} alt="pic" className='skills-card-img'  />

                  </div>
                   
        })
       }



    </div>




    </div>
  )
}

export default Skills