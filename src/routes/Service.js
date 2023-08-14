import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import aboutImg from '../assets/meghalaya1.jpg'
import Services from "../components/Services";
function Service() {
  return (
    <>
   
         <Hero
      cName="hero-mid"
      heroImg={aboutImg}
      title="SERVICES"
      
      btnClass="hide"
      />
      <Services/>
      <Trip/>
    </>
  );
}

export default Service;
