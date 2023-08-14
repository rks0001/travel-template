import React from 'react'
import Hero from '../../components/Hero'
import img1 from '../../assets/meghalaya2.jpg'
import './Tour.css'
import { TabTitle } from '../../utils/GeneralFunctions'

const Tour = () => {
  TabTitle('Explore Tours');
  return (
    <>
   <Hero
      cName="hero-mid"
      heroImg={img1}
      title="EXPLORE MEGHALAYA"
      text="Unforgettable Journeys Await"
      buttonText="Book Your Adventure"
      url="/"
      btnClass="hide"
      />
      <div className='information'>
        {/* Icons */}
        <div className='introicons'>
          <div><i class="fa-solid fa-person"></i><h3>2-13 Person</h3></div>
          <div><i class="fa-solid fa-location-dot"></i><h3>Arunachal Pradesh</h3></div>
          <div><i class="fa-solid fa-mountain-sun"></i><h3>Sightseeing</h3></div>
        </div>
      {/* Trip Highlights */}
      <div className="trip-highlight">
        <h2>Trip Highlights</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      {/* Itinerary  */}
      <div className="itinerary">
        
      </div>
      </div>
    </>
    
  )
}

export default Tour