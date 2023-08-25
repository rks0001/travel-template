import React from 'react';
import Hero from "../components/Hero";

import ContactForm from "../components/ContactForm";
import aboutImg from '../assets/arunachal6.jpg'
function Contact() {
  return (
    <div className='mainsection'>
<div className="maincontact">
  <div className='leftpanell'><img className="contactimg" alt="" src="https://media.giphy.com/media/kz6cm1kKle2MYkHtJF/giphy.gif"/></div>
  <div className='rightpanell'><ContactForm/></div>

</div>
      
    </div>
  );
}

export default Contact;
