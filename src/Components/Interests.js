import React ,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
var count=0;
export default function Interests() {
  const [reveal, setreveal] = useState(false)
  
  function revealed(){
    // var designs = document.querySelectorAll('.designs')
    // for(var i=0;i<designs.length;i++)
    // {
    //   var windowht=window.innerHeight;
    //   var top=designs[i].getBoundingClientRect().top;
    //   var rp=150;
    // }
    if(window.scrollY>=(1650))
    {
      if(count!=1){
      setreveal(true);
      let x=document.querySelectorAll(".designs");
      setTimeout(()=>{
        for(var i=0;i<x.length;i++)
        {
          x[i].classList.remove("revealDesign")
        }
        count=1;
      },1000)
      }
      else{
        setreveal(false);
      }
    } 
  }
    window.addEventListener("scroll",revealed)
   
  return (
    <>
    <div className="hr mw3" name="interests">
      <hr />
    </div>
    <div className="mw3 interests">
        <div className="interestsLeft">
        <h1 className='heading'><i class="fa-solid fa-laptop"></i>&nbsp;Interests</h1>
        </div>
        <div className="interestsRight">
            <div className={reveal ? "designs revealDesign" : "designs"}>
            <span><i class="fa-solid fa-code"></i></span>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum magni provident qui autem pariatur, adipisci ipsam ex maiores cumque vel corrupti ad molestiae.</p>
            </div>
            <div className={reveal ? "designs revealDesign" : "designs"}>
            <span><i class="fa-solid fa-crop-simple"></i></span>
                <h3>UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum magni provident qui autem pariatur, adipisci ipsam ex maiores cumque vel corrupti ad molestiae.</p>
            </div>
            <div className={reveal ? "designs revealDesign" : "designs"}>
                <span> <i class="fa-brands fa-app-store"></i></span>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum magni provident qui autem pariatur, adipisci ipsam ex maiores cumque vel corrupti ad molestiae.</p>
            </div>
        </div>
    </div>
    </>
  )
}
