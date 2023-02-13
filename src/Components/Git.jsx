import React from 'react'

import GitHubCalendar from "react-github-calendar"
import  {Tooltip}  from 'react-tooltip'
import "../css/Git2.css"
const Git = () => {


 

  return (
    <div className='GitContainer' >

     <p className='gitP1' >Git Stats</p>
     <p  className='gitP2' >Lets get into some statistics. Shall we?</p>

     <div className='calendarDiv' >
      <p className='calendarP' >Git Calendar</p>
     <GitHubCalendar  username='aman7github'  blockSize={14}  fontSize={14} />
     <Tooltip   />

     </div>


     <div className='Stats' >
      {/* <div style={{ width: "40%", margin: "auto" }}>
        <a href="https://github.com/aman7github">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=aman7github"
          />
        </a>
      </div> */}

      <p className='statsP' >Git Stats</p>

      <div id="github-streak-stats">
        <a href="https://github.com/aman7github">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=aman7github"
          />
        </a>
      </div>
 
        <div id="github-stats-card"  >
        <a href="https://github.com/saurabh0413">
          <img
            align="left" className='stats1'
            src="https://github-readme-stats.vercel.app/api?username=aman7github&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
       
      <div  id="github-top-langs" >
        <a href="https://github.com/aman7github">  
          <img
            align="center" style={{width:"100%"}}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=aman7github"  //launguages
          />
        </a>
        </div>





    </div>
  


    

    </div>
  )
}

export default Git







 //  const selectLastHalfYear = (contributions)=>{

  //   const currentYear = new Date().getFullYear()
  //   const currentMonth = new Date().getMonth()
  //   const showMonths = 12


  //   return contributions.filter((day)=>{
  //      const date = new Date(day.date)
  //      const monthOfDay = date.getMonth()

  //      return(
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - showMonths &&
  //       monthOfDay <= currentMonth
  //     )
  //   })
  //  }