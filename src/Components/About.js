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
  return (
    <>
      
    <div className="info mw3" name="about">
      <div className="infoLeft" >
       <h1 className='heading'>👨‍🎓About Me</h1>
       <p> Hello I am <span className='splColor'>Akash Mahendrakar</span> , currently a 3rd year student in <span className='splColor'>Vellore Institute of Technology</span> , <span className='splColor'> Chennai</span> .I have been interested in technology and computers.Hence , I am currently pursuing this interest as a Computer Science Student.</p>
       <p style={{marginTop:"3%"}}>
        I am good at <span className='splColor'>Frontend Development</span> , <span className='splColor'>DSA</span> and Experienced in <span className='splColor'>Web Development</span>
       </p>
      </div>
      <div className="infoRight">
        
        <a href={resume} download ><button>Download CV</button></a>
      </div>
    </div>
    <div className="hr mw3">
      <hr />
    </div>
    <div className="mw3 myskills">
      <div className="myskillsLeft">
        <h1 className='heading'>My Skills💪 </h1>
      </div>
      <div className="myskillsRight">
        <div className="links">
              <div className="tab-links linksLeft">
                      <p id='tlink1' className="tlink activeLink"  onClick={()=>props.onclick("lang")}>LANGUAGES</p>
                      <p id='tlink2' className='tlink'  onClick={()=>props.onclick("front")} >FRONTEND</p>
                      <p id='tlink3' className='tlink'  onClick={()=>props.onclick("back")} >BACKEND</p>
                      <p id='tlink4' className='tlink'  onClick={()=>props.onclick("dsa")} >DSA</p>
              </div>
              <div className='linksRight' onClick={onclick} id='lang'>
                    <div className='img'>
                    <img className='im1' src={cpp} alt="" /> <br />
                    C++
                    </div>
                    <div className='img'>
                    <img className='im1' src={py} alt="" />  <br />
                    Python
                    </div  >
                    <div className='img'>
                    <img className='im1' src={java} alt="" />  <br />
                    Java
                    </div>
                    <div className='img'>
                    <img className='im1' src={js} alt="" />  <br />
                    Java Script
                    </div>
                  
              </div>
            <div className='linksRight none '  onClick={onclick} id='front'>
                    <div className='img'>
                    <img className='im1' src={html} alt="" />  <br />
                    HLML
                    </div>
                    <div className='img'>
                    <img className='im1' src={css} alt="" />  <br />
                    CSS
                    </div  >
                    <div className='img'>
                    <img className='im1' src={js} alt="" />  <br />
                    Java Script
                    </div>
                    <div className='img'>
                    <img className='im1' src={bs} alt="" />  <br />
                    Bootstrap
                    </div>
                    <div className='img'>
                    <img className='im1' src={react} alt="" />  <br />
                    React JS
                    </div>
                   
             </div>
            <div className='linksRight none '  onClick={onclick} id='back'>
                  <div className='img '>
                      <img className='  imgdif' src={mongodb} alt="" />  <br />
                       Mongo DB
                  </div>
                  {/* <div className='img '>
                      <img className='  imgdif' src={express} alt="" />  <br />
                       Express JS
                  </div>
                  <div className='img '>
                      <img className='imgdif' src={node} alt="" />  <br />
                       Node JS
                  </div> */}
             </div>
            <div className='linksRight none   'onClick={onclick}  id='dsa'>
                    <div className='img'>
                    <img className='im1' src={cpp} alt="" />  <br />
                    C++
                    </div>
             </div>
            

        </div>
      </div>
    </div>
    
    </>
  )
}
