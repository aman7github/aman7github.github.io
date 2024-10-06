import React from 'react'

import GitHubCalendar from "react-github-calendar"
import  {Tooltip}  from 'react-tooltip'
import "../css/Git2.css"


const Git = () => {


 

  return (
    <div className='GitContainerAMAN' >

     <p className='gitP1AMAN' >Git Stats</p>
     {/* <p  className='gitP2' >Lets get into some statistics. Shall we?</p> */}

     <div className='calendarDivAMAN' >
      <p className='calendarPAMAN' >Git Calendar</p>
     <GitHubCalendar  username='aman7github'  blockSize={14}  fontSize={3}  className="react-activity-calendar" />
     <Tooltip   />

     </div>


     <div className='StatsAMAN' >
   

      <p className='statsPAMAN' >Git Stats</p>
      
      <div className='allAMAN' >

   
      //https://github-readme-streak-stats.herokuapp.com/?user=aman7github
      <div className="github-streak-stats" >
         <a href="https://github.com/aman7github">
           <img className='streakAMAN'
              align="left"
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com/?user=aman7github" alt="pic" />

         </a>
      </div>


        <div className="github-stats-card" >
           <a  href="https://github.com/aman7github">
             <img className='stats1AMAN'
             id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=aman7github&count_private=true&show_icons=true" alt="pic" />
           </a>
        </div>
       
      <div  className="github-top-langs" >
        <a href="https://github.com/aman7github">  
          <img
            align="center" style={{width:"100%"}}
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=aman7github"  //launguages
          />
        </a>
        </div>

   
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