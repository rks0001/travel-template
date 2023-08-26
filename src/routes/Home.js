import React from 'react';

import { TabTitle } from "../utils/GeneralFunctions";
import CenterMode from '../components/Carousel';

import HeroSection from '../components/HeroSection';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Services from '../components/Services';


function Home() {
  TabTitle('ithvaraa');
  return (
    <>
  <HeroSection/>
  <Section2/>
   <Section3/>
  <Services/>
      <CenterMode/>
   
      
      
    </>
  );
}

export default Home;
