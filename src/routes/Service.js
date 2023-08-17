import React from 'react';
import Hero from "../components/Hero";


import Trip from "../components/Trip";
import aboutImg from '../assets/meghalaya1.jpg'
import Services from "../components/Services";
function Service() {
  return (
    <>
   
         <Hero
      cName="hero-mid"
      cName2="hero-text2"
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
