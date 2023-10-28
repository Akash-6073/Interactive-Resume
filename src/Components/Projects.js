import React ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Style/style.css"
import "../Style/utils.css"
// import pj from "../Images/project.png"
import js from "../Images/js.png"
import gh from "../Images/github.png"
import p2 from "../Images/p2.png"

export default function Projects() {
    const [shake, setshake] = useState(false)

  return (
     <>
      <div className="hr mw3" name="projects">
      <hr />
    </div>
    <div className="mw3 projects">
        <div className="projectsLeft">
        <h1 className='heading'>Projects&nbsp;💻</h1>
        </div>
    <div className="projectsRight">
        
        <div className="box">
        <h3>Text to speech Converter</h3>
            <img src={p2} alt="" />
            <div className="content">
                <p>content</p> <br />
                <p style={{textAlign:'left'}}> <b>Tech Used : </b></p>
                <div className='pbtns'>
                   <a href=""> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href=""><h1><i className="fa-brands fa-github fa-2xs " style={{height:"20px"}}></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box">
        <h3>Title</h3>
            <img src={p2} alt="" />
            <div className="content">
                <p>content</p> <br />
                <p style={{textAlign:'left'}}> <b>Tech Used : </b></p>
                <div className='pbtns'>
                   <a href=""> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href=""><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box">
        <h3>Title</h3>
            <img src={p2} alt="" />
            <div className="content">
                <p>content</p> <br />
                <p style={{textAlign:'left'}}> <b>Tech Used : </b></p>
                <div className='pbtns'>
                   <a href=""> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href=""><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box">
        <h3>Title</h3>
            <img src={p2} alt="" />
            <div className="content">
                <p>content</p> <br />
                <p style={{textAlign:'left'}}> <b>Tech Used : </b></p>
                <div className='pbtns'>
                   <a href=""> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href=""><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box">
        <h3>Title</h3>
            <img src={p2} alt="" />
            <div className="content">
                <p>content</p> <br />
                <p style={{textAlign:'left'}}> <b>Tech Used : </b></p>
                <div className='pbtns'>
                   <a href=""> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href=""><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
        <div className="box last">
        <h3>View all on my GitHub</h3>
        <div className="icon">
        <i class="fa-brands fa-square-github"></i>
        </div>

            <div className="content">
              
                <div className='pbtns lpbtns'>
                   <a href=""> <button>Go to Website &nbsp; <i className="fa-solid fa-link"></i></button></a> 
                    <a href=""><h1><i className="fa-brands fa-github fa-2xs"></i></h1></a>
                </div>
            </div>
        </div>
    </div>
    </div>
    {/* <div className="mw3 projects">
        <div className="container">
            <h1>Projects</h1>
            <div className="works">
                <div className="work">
                    <img src={p2} alt="" />
                </div>
                <div className="work">
                    <img src={p2} alt="" />
                </div>
                <div className="work">
                    <img src={jsy} alt="" />
                </div>
            </div>
        </div>
    </div> */}


     </>
  )
}
