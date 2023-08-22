import React from 'react';
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import img1 from '../assets/arunachal4.jpg'
import { TabTitle } from "../utils/GeneralFunctions";
import CenterMode from '../components/Carousel';
import Destination2 from '../components/Destination2';
// import CustomerExperiences from '../components/CustomerExperiences';
// import review1 from '../assets/review1.mp4'

function Home() {
  TabTitle('ithvaraa');

  // const videoUrls = [
  //   review1,
  //   review1,
  //   review1,
  //   // Add more video URLs
  // ];
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
      {/* <CustomerExperiences
      videoUrls={videoUrls}
      /> */}
    </>
  );
}

export default Home;
