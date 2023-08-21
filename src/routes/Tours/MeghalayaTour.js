import React from 'react'
import Hero from '../../components/Hero'
import img1 from '../../assets/meghalaya2.jpg'
import './Tour.css'
import { TabTitle } from '../../utils/GeneralFunctions'
import Responsive from '../../components/Carousel'
import Trip from '../../components/Trip'
import Contact from '../Contact'
import ContactForm from '../../components/ContactForm'
import CollapseMenu from '../../components/Collapse'

const MeghalayaTour = () => {
  TabTitle('Explore Meghalaya');
  return (
    <>

   <Hero
      cName="hero-mid"
      cName2="hero-text2"
      heroImg={img1}
      title="EXPLORE MEGHALAYA"
      text="6N/7D"
      buttonText="Book Your Adventure"
      url="/"
      btnClass="hide"
      />
      <div className="layoutmain">
       
      <div className='information'>
        
      {/* Trip Highlights */}
      <div className="div-container">
        <h2 className='div-container-title'>Trip Highlights</h2>
        <ul className='list1'>
  <li>
    <strong>Krem Chympe caves and falls:</strong><br/>
    Krem Chympe is the 5th longest cave in India. Hidden in the forests of Jaintia Hills, Krem Chympe and Chympe Waterfalls are two such places that will have you completely amazed.
  </li>
  <li>
    <strong>The Dawki river:</strong><br/>
    A beautiful river with crystal clear waters, Dawki is one of the most picture-perfect spots you'll find in Meghalaya.
  </li>
  <li>
    <strong>Walk on the root bridges:</strong><br/>
    The moss and lichen which cover the trees turn the living bridges lush green. Around 30 meters long and 2400 feet high, the double-decker root bridge in Cherrapunji is a sight to behold in monsoon.
  </li>
  <li>
    <strong>Land of waterfalls:</strong><br/>
    We will be witnessing several beautiful and mesmerizing waterfalls.
  </li>
</ul>

        
      </div>

      {/* Icons */}
      <div className='introicons'>
          <div><i className="fa-solid fa-person icon"></i><h3 className='icontext' >2-13 Person</h3></div>
          <div><i className="fa-solid fa-location-dot icon"></i><h3 className='icontext'> Meghalaya</h3></div>
          <div><i className="fa-solid fa-mountain-sun icon"></i><h3 className='icontext'>Sightseeing</h3></div>
        </div>
      {/* Itinerary  */}
      <div className="div-container">
      <h2 className='div-container-title'>Itinerary</h2>
      <CollapseMenu
    cName="day"
    title="DAY 1 "
    text={
      <ul>
        <li>Pickup from Guwahati airport at 8:30 PM</li>
        <li>Stop for breakfast and fresh up on the way</li>
        <li>Breather at Umium lake</li>
        <li>Head to Khliehriat, Most of the day would be travelling to reach the place</li>
        <li>Reach stay and rest</li>
      </ul>
    }
  />
  <CollapseMenu
    cName="day"
    title="DAY 2 "
    text={
      <ul>
        <li>Start to the base village of Krem Cheympe</li>
        <li>Off-roading drive to the hiking point</li>
        <li>Hike down to the Krem waterfalls</li>
        <li>Up to explore the Krem Cheympe caves</li>
        <li>Head to the stay</li>
      </ul>
    }
  />
  <CollapseMenu
    cName="day"
    title="DAY 3 "
    text={
      <ul>
        <li>Krang Shuri falls</li>
        <li>Cliff Jump</li>
        <li>To the Phe Phe falls</li>
        <li>Camping by lake near the Phe Phe falls</li>
      </ul>
    }
  />
  <CollapseMenu
    cName="day"
    title="DAY 4 "
    text={
      <ul>
        <li>India-Bangladesh border</li>
        <li>The Dawki river boating</li>
        <li>Stay at the Cleanest Village Mawlynnong</li>
      </ul>
    }
  />
  <CollapseMenu
    cName="day"
    title="DAY 5 "
    text={
      <ul>
        <li>Zipline</li>
        <li>Garden of caves</li>
        <li>Nokhalikai falls</li>
        <li>Wei Sawdong falls</li>
      </ul>
    }
  />
  <CollapseMenu
    cName="day"
    title="DAY 6 "
    text={
      <ul>
        <li>The Nongriat trek, Whole day trek</li>
        <li>Living root bridge</li>
        <li>Double Becker living root bridge</li>
        <li>Blue lagoon</li>
        <li>Rainbow falls</li>
        <li>Back to Shillong</li>
      </ul>
    }
  />
  <CollapseMenu
    cName="day"
    title="DAY 7 "
    text={
      <ul>
        <li>Sacred forest hike</li>
        <li>Head back to Guwahati</li>
        <li>Visit Kamakya temple</li>
        <li>Drop back to the airport</li>
      </ul>
    }
  />
    

      </div>

      {/* Include  */}
      <div className="div-container">
      <h2 className='div-container-title'>Inclusions & Exclusions</h2>
      <CollapseMenu
    cName="inclusion"
    title="Inclusion |"
    text={
      <ul>
        <li>Transportation Guwahati-Guwahati</li>
        <li>Stay and breakfast</li>
        <li>Entries and activities</li>
        <li>Guides and off-roading vehicles</li>
        <li>Trip organizer</li>
      </ul>
    }
  />
      {/* <CollapseMenu
      title="Exclusions"
      text="Sample Text 1"
      /> */}
      
      </div>

    {/* Must Carry  */}
    <div className="div-container">
      <h2 className='div-container-title'>Must Carry</h2>
      <CollapseMenu
      title="Must Carry"
      text="Sample Text 1"
      />
      </div>


      {/* FAQs */}
      <div className="div-container">
      <h2 className='div-container-title'>FAQs</h2>
      <CollapseMenu
      title="Question 1 "
      text="Answer 1"
      />
      <CollapseMenu
      title="Question 2 "
      text="Answer 2"
      />
      <CollapseMenu
      title="Question 3 "
      text="Answer 3"
      />
      <CollapseMenu
      title="Question 4 "
      text="Answer 4"
      />
      </div>

      <Responsive/>
     
      </div>

      
      </div>
      
      <Trip/>
      <div className="contactformmain">
        <ContactForm/>
      </div>
    </>
    
  )
}

export default MeghalayaTour