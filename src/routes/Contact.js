import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import aboutImg from '../assets/arunachal6.jpg'
function Contact() {
  return (
    <>
    
         <Hero
      cName="hero-mid"
      heroImg={aboutImg}
      title="CONTACT US"
      
      btnClass="hide"
      />
      <ContactForm/>
    </>
  );
}

export default Contact;
