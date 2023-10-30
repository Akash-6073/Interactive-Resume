import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Style/style.css"
import "../Style/utils.css"
import "../Style/responsive.css"
import cpp from "../Images/cpp.png"
import py from "../Images/py.png"
import java from "../Images/java.png"
import html from "../Images/html.png"
import css from "../Images/css.png"
import js from "../Images/js.png"
import react from "../Images/react.png"
import bs from "../Images/bs.png"
import mongodb from "../Images/mongodb.png"
import node from "../Images/node.png"
import express from "../Images/express.png"

import resume from "../Images/RESUME.pdf"

export default function About(props) {

  // const observer = new IntersectionObserver((entries)=>{
  //   entries.forEach((entry)=>{
  //     if(entry.isIntersecting)
  //     {
  //       entry.target.classList.add('.zoomShow');
  //     }
  //   })
  // })

  // const zoomHide=document.querySelectorAll(".zoomHide");
  // zoomHide.forEach((el)=>observer.observe(el));

  return (
    <>
      
    <div className="info mw3" name="about">
      <div className="infoLeft " >
       <h1 className='heading'>👨‍🎓About Me</h1>
       <div  className='hidden'>
       <p> Hello I am <span className='splColor'>Akash Mahendrakar</span> , currently a 3rd year student in <span className='splColor'>Vellore Institute of Technology</span> , <span className='splColor'> Chennai</span> .I have been interested in technology and computers.Hence , I am currently pursuing this interest as a Computer Science Student.</p>
       <p style={{marginTop:"3%"}}>
        I am good at <span className='splColor'>Frontend Development</span> , <span className='splColor'>DSA</span> and Experienced in <span className='splColor'>Web Development</span>
       </p>
       </div>
      </div>
      <div className="infoRight hidden">
        
        <a href={resume} download ><button>Download CV</button></a>
      </div>
    </div>
    <div className="hr mw3">
      <hr />
    </div>
    
    
    </>
  )
}
