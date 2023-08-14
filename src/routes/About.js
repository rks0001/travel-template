import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import aboutImg from '../assets/night.jpg'

function About() {
  return (
    <>
         <Hero
      cName="hero-mid"
      heroImg={aboutImg}
      title="About"
      
      btnClass="hide"
      />
      <AboutUs/>
      
    </>
  );
}

export default About;
