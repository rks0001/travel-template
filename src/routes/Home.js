import React from 'react';
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import img1 from '../assets/mountain2.jpg'
import { TabTitle } from "../utils/GeneralFunctions";
import CenterMode from '../components/Carousel';
import Destination2 from '../components/Destination2';
import Services from '../components/Services';





function Home() {
  TabTitle('ithvaraa');
  return (
    <>
      <Hero
      cName="hero"
      cName2="hero-text"
      heroImg={img1}
      title="Welcome to"
      text="DISCOVER WANDER REPEAT"
      buttonText="BOOK YOUR ADVENTURE"
      url="/contact"
      btnClass="show anglebg"
      />
      <Destination2/>
      <Trip/>
      <CenterMode/>
   
      
      
    </>
  );
}

export default Home;
