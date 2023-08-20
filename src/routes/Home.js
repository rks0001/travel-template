import React from 'react';
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import img1 from '../assets/arunachal6.jpg'
import { TabTitle } from "../utils/GeneralFunctions";
import CenterMode from '../components/Carousel';
import Destination2 from '../components/Destination2';

function Home() {
  TabTitle('ithvaraaTravels');
  return (
    <>
      <Hero
      cName="hero"
      cName2="hero-text"
      heroImg={img1}
      title="DISCOVER WANDER REPEAT"
      // text="Unforgettable Journeys Await"
      buttonText="BOOK YOUR ADVENTURE"
      url="/contact"
      btnClass="show anglebg"
      />
      {/* <Destination/> */} 
      <Destination2/>
      <Trip/>
      <CenterMode/>
    </>
  );
}

export default Home;
