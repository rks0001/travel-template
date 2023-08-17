import React from 'react';
import Hero from "../components/Hero";

import ContactForm from "../components/ContactForm";
import aboutImg from '../assets/arunachal6.jpg'
function Contact() {
  return (
    <>
    
         <Hero
      cName="hero-mid"
      cName2="hero-text2"
      heroImg={aboutImg}
      title="CONTACT US"
      
      btnClass="hide"
      />
      <ContactForm/>
    </>
  );
}

export default Contact;
