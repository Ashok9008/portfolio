import React, { useState } from 'react'
import './contact.css'
import BottomLine from '../components/BottomLine'

const Contact = () => {

  const formInitialDetails = {
    firstName:"",
    lastName:"",
    Email:"",
    phone:"",
    message:"",
  }
  const [formDetails , setFormDetails] = useState(formInitialDetails);
  const [buttonText , setButtonText] = useState('send');

  const onFormUpdate = (category , value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("portfolio-backend-git-main-ashok9008.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    
     if (result.code === 200) {
     console.log('Send Successfull')
    } else {
      console.log('error')
      }
    };

  return (
    <>
      <div className='bottom-div'>
        <h1 className='hading'>My Contact</h1>
        <BottomLine />
      </div>

      <section>
    <div class="container">
      <div class="row">
        
        <div class="contact-form">
          <form action="" id="contact-form" onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div class="input-box">
              <input
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate('firstName',e.target.value)}
                type="text" 
                required="true" 
                name=""
                id='name'
                placeholder="First Name" 
                requiredr />
            </div>
            
            <div class="input-box">
              <input 
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate('lastName',e.target.value)}
                type="text" 
                required="true" 
                name=""  
                placeholder="Last Name" 
                requiredr />
            </div>

            <div class="input-box">
              <input 
                value={formDetails.Email}
                onChange={(e) => onFormUpdate('Email',e.target.value)}
                type="email" 
                required="true"
                id='email'
                name=""
                placeholder="Email"
                requiredr />
            </div>

            <div class="input-box">
              <input 
                value={formDetails.phone}
                onChange={(e) => onFormUpdate('phone',e.target.value)}
                type="number" 
                required="true" 
                id='phone'
                name="" 
                placeholder="Phone" 
                requiredr/>
            </div>
            
            <div class="input-box">
              <textarea
                value={formDetails.message}
                onChange={(e) => onFormUpdate('message',e.target.value)}
                id='message'
                equiredr="true" 
                name="message"
                placeholder="Type Your Message..." />
            </div>
            
            <div class="input-box">
              <button className='btn-btn'>
                <p>{buttonText}</p>
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
  
    </>
  )
}

export default Contact
