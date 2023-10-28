import React ,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
var count=0;
export default function Interests() {
  const [reveal, setreveal] = useState(false)
    const observe = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting)
        {
          entry.target.classList.add('transShow');
        }
      })
    })
    const hide=document.querySelectorAll(".transHide");
    hide.forEach((el)=>observe.observe(el));


  return (
    <>
    <div className="hr mw3" name="interests">
      <hr />
    </div>
    <div className="mw3 interests">
        <div className="interestsLeft">
        <h1 className='heading'><i className="fa-solid fa-laptop"></i>&nbsp;Interests</h1>
        </div>
        <div className="interestsRight transHide">
            <div className={reveal ? "designs revealDesign" : "designs"}>
            <span><i className="fa-solid fa-code"></i></span>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum magni provident qui autem pariatur, adipisci ipsam ex maiores cumque vel corrupti ad molestiae.</p>
            </div>
            <div className={reveal ? "designs revealDesign" : "designs"}>
            <span><i className="fa-solid fa-crop-simple"></i></span>
                <h3>UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum magni provident qui autem pariatur, adipisci ipsam ex maiores cumque vel corrupti ad molestiae.</p>
            </div>
            <div className={reveal ? "designs revealDesign" : "designs"}>
                <span> <i className="fa-brands fa-app-store"></i></span>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum magni provident qui autem pariatur, adipisci ipsam ex maiores cumque vel corrupti ad molestiae.</p>
            </div>
        </div>
    </div>
    </>
  )
}
