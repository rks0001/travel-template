import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import aboutImg from '../assets/meghalaya5.jpg'

function About() {
  return (
    <>
         <Hero
      cName="hero-mid"
      heroImg={aboutImg}
      title="ABOUT US"
      
      btnClass="hide"
      />
      <AboutUs/>
      
    </>
  );
}

export default About;
