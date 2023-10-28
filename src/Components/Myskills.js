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


export default function Myskills(props) {


    const observe = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting)
          {
            entry.target.classList.add('zoomShow');
          }
        })
      })
      
      const hide=document.querySelectorAll(".zoomHide");
      hide.forEach((el)=>observe.observe(el));

  return (
   <>
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
              <div className='linksRight   ' onClick={onclick} id='lang'>
                    <div className='img  '>
                    <img className='im1 zoomHide' src={cpp} alt="" /> <br />
                    C++
                    </div>
                    <div className='img '>
                    <img className='im1 zoomHide' src={py} alt="" />  <br />
                    Python
                    </div  >
                    <div className='img '>
                    <img className='im1 zoomHide' src={java} alt="" />  <br />
                    Java
                    </div>
                    <div className='img '>
                    <img className='im1 zoomHide' src={js} alt="" />  <br />
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
