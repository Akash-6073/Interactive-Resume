import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Style/style.css"
import "../Style/utils.css"
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let rname = document.querySelector(".rname");
    let remail = document.querySelector(".remail");
    let msg=document.getElementById("msg");
    

    let x= rname.value;
    let y= remail.value;
    if(x==="" || y==="")
    {
      if(x==="")
      {
      msg.innerText="!! Enter a Valid Name"
      rname.classList.add("shake");
      rname.classList.remove("removeBorder");
      msg.classList.remove("vsble");
      msg.classList.remove("success")

        
      setTimeout(()=>{
      rname.classList.remove("shake");
      rname.classList.add("removeBorder");
      // msg.classList.remove("errorMsg")
      msg.classList.add("vsble");


      },1000)
      }
      if (y==="")
      {
        msg.innerText="!! Enter a Valid Email"
        remail.classList.add("shake");
        remail.classList.remove("removeBorder");
        msg.classList.remove("vsble");
      msg.classList.remove("success")

        setTimeout(()=>{
        remail.classList.remove("shake");
        remail.classList.add("removeBorder");
        // msg.classList.remove("errorMsg")
        msg.classList.add("vsble");

  
        },1000)

      }
      if (x==="" && y==="")
      {
        msg.innerText=" !! Enter a Valid Name and Email"
        rname.classList.add("shake");
        remail.classList.add("shake");
        remail.classList.remove("removeBorder");
        rname.classList.remove("removeBorder");
        msg.classList.remove("vsble");
      msg.classList.remove("success")
        setTimeout(()=>{
        rname.classList.remove("shake");
        remail.classList.remove("shake");
        remail.classList.add("removeBorder");
        rname.classList.add("removeBorder");
        // msg.classList.remove("errorMsg")
        msg.classList.add("vsble");


  
        },1000)

      }
      msg.classList.remove("vsble");
      msg.classList.remove("thanks");
      msg.classList.add("errorMsg");
      setTimeout(()=>{
        msg.classList.add("vsble");
      msg.classList.remove("activeMsg")
      },3000)

    }
    else  {
    emailjs.sendForm('service_5cgnuya', 'template_ywwb4s8', form.current, 'p1lmxrHXrfKUfsxvt')
    
      .then((result) => {
         
          console.log(x)
          e.target.reset();
          msg.innerText="Thank you "+x+" 😊! Message sent Successfully"
          msg.classList.remove("vsble");
          msg.classList.remove("errorMsg");
          msg.classList.add("activeMsg")
          msg.classList.add("success")
          setTimeout(()=>{
            msg.classList.add("vsble");
          msg.classList.remove("activeMsg")
          },4500)
         
      }, (error) => {
          console.log(error.text);
      });
    }
  };

  return (
    <>
       <div className="hr mw3" name="contact">
      <hr />
    </div>
    <div className='mw2 contactMain'>
    <div className="mw3 contact">
        <div className="contactLeft">
              <h1 className='heading'>Contact me</h1>
              <p><span style={{color:"#ff004f"}} ><i class="fa-regular fa-envelope"></i></span>&nbsp;<a href="mailto:akashmahendrakar6073@gmail.com" style={{textDecoration:"none", color:"black"}}>akashmahendrakar6073@gmail.com</a></p>
              <p><span style={{color:"#ff004f"}} ><i class="fa-brands fa-whatsapp" style={{color: "#2db950"}}></i></span>&nbsp;<a href="https://wa.me/918919596263" style={{textDecoration:"none", color:"black"}} target='_blank'>+91 8919596263</a></p>
              <div className="contactMedia">
              <a href="https://www.instagram.com/akash__mahendrakar/"> <i class="fa-brands fa-instagram" style={{ color: "red"}}></i> </a>
              <a href="https://www.instagram.com/akash__mahendrakar/"><i class="fa-brands fa-facebook" style={{color:"#4267B2"}}></i> </a>
              <a href="https://www.instagram.com/akash__mahendrakar/"><i class="fa-brands fa-github"></i> </a>
              <a href="https://www.instagram.com/akash__mahendrakar/"><i class="fa-brands fa-linkedin" style={{color:"#0a66c2"}} ></i> </a>
              </div>
              <p style={{fontSize:"24px"}} className='thanks'>Thanks for  Visiting my Portfolio !</p>
              
        </div>
        <div className="contactRight">
          <form action="" ref={form} onSubmit={sendEmail}>
           <p className='message'>Send me a Message</p>
            <input className='rname removeBorder' type="text" placeholder='Your Name' name="user_name"/>
            <input className='remail removeBorder' type="email" placeholder='Your Email' name="user_email"/>
            <textarea name="message" style={{ background:"rgba(128, 128, 128, 0.681)"  }} id="" cols="30" rows="5" placeholder='Message'></textarea>
            <button type='submit' ><i class="fa-solid fa-paper-plane"></i>&nbsp;Let's Collaborate</button>
            <span className='vsble' id='msg'></span>
          </form>
        </div>
    </div>
    </div>
    <div className="mw2 footer">
      Copyright &copy; Made with <i class="fa-solid fa-heart" style={{color:"#ff004f"}}></i> Akash Mahendrakar
    </div>
    </>
  )
}
