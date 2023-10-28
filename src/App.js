import { useState } from 'react';
import './App.css';
import pr from './Images/pr.jpg'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Interests from './Components/Interests'
import { Link } from 'react-scroll';
function App() {
const [ht, setht] = useState("0")

  const onclick=(tname)=>{
      let l1=document.getElementById("tlink1")
      let l2=document.getElementById("tlink2")
      let l3=document.getElementById("tlink3")
      let l4=document.getElementById("tlink4")
      let tn1=document.getElementById("lang");
      let tn2=document.getElementById("front");
      let tn3=document.getElementById("back");
      let tn4=document.getElementById("dsa");
      if(tname==="lang"){
        l1.classList.add("activeLink");
        l2.classList.remove("activeLink");
        l3.classList.remove("activeLink");
        l4.classList.remove("activeLink");
      }
      if(tname==="front")
      {
        l1.classList.remove("activeLink");
        l2.classList.add("activeLink");
        l3.classList.remove("activeLink");
        l4.classList.remove("activeLink");
      }
      if(tname==="back")
      {
        l1.classList.remove("activeLink");
        l2.classList.remove("activeLink");
        l3.classList.add("activeLink");
        l4.classList.remove("activeLink");
      }
      if(tname==="dsa")
      {
        l1.classList.remove("activeLink");
        l2.classList.remove("activeLink");
        l3.classList.remove("activeLink");
        l4.classList.add("activeLink");
      }

      let vars=document.querySelectorAll(".linksRight")
        for(var i=0;i<vars.length;i++)
        {
          vars[i].classList.add("none");
        }
        let inames=document.getElementById(tname);
        inames.classList.remove("none")
        
  }
  const [id,setid]=useState('');

  const [scroll, setscroll] = useState(false)
  function scrolled(){
   if(window.scrollY >=100){
     setscroll(true);
   }
   else{
     setscroll(false);
   }
  }
  window.addEventListener("scroll",scrolled)


  const [right, setright] = useState("-200px")
  var menu=document.getElementById("Menu")
  function close(){
   setright("-200px")
  }
  function open(){
   setright("0px")
  }
  return (
    <>
    <div className={scroll ? 'tran tscroll' :'none'} >
      <div className="ttl">
      <div className="titleLeft">
      Akash Mahendrakar , I
        </div> 
        <div className="titleRight">
         <Link to='home' smooth={true} spy={true} duration={500}> 
         <img src={pr} alt="" style={{cursor:"pointer"}} />
          </Link> 
        </div>
        </div>
         

    </div>
    <Navbar scroll={scroll} right={right} setright={setright} close={close} open={open}/>
    <About onclick={onclick} ht={ht}/>
    <Interests/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
