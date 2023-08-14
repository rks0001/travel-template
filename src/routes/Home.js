import React from 'react';
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import img1 from '../assets/arunachal6.jpg'
import { TabTitle } from "../utils/GeneralFunctions";

function Home() {
  TabTitle('Ithvaraa Travels');
  return (
    <>
      <Hero
      cName="hero"
      heroImg={img1}
      title="DISCOVER WANDER REPEAT"
      // text="Unforgettable Journeys Await"
      buttonText="BOOK YOUR ADVENTURE"
      url="/"
      btnClass="show anglebg"
      />
      <Destination/>
      <Trip/>
    </>
  );
}

export default Home;
