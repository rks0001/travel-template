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

const Tour = () => {
  TabTitle('Explore Tours');
  return (
    <>

   <Hero
      cName="hero-mid"
      cName2="hero-text2"
      heroImg={img1}
      title="EXPLORE MEGHALAYA"
      text="Unforgettable Journeys Await"
      buttonText="Book Your Adventure"
      url="/"
      btnClass="hide"
      />
      <div className="layoutmain">
       
      <div className='information'>
        {/* Icons */}
        <div className='introicons'>
          <div><i className="fa-solid fa-person icon"></i><h3 className='icontext' >2-13 Person</h3></div>
          <div><i className="fa-solid fa-location-dot icon"></i><h3 className='icontext'> Meghalaya</h3></div>
          <div><i className="fa-solid fa-mountain-sun icon"></i><h3 className='icontext'>Sightseeing</h3></div>
        </div>
      {/* Trip Highlights */}
      <div className="div-container">
        <h2 className='div-container-title'>Trip Highlights</h2>
        <ul className='list1'>
          <li>Sample Text</li>
          <li>Sample Text</li>
          <li>Sample Text</li>
          <li>Sample Text</li>
        </ul>
        
      </div>
      {/* Itinerary  */}
      <div className="div-container">
      <h2 className='div-container-title'>Itinerary</h2>
    
    <CollapseMenu
      title="Day 1 |"
      text="Sample Text 1"
      />
   
    <CollapseMenu
      title="Day 2 |"
      text="Sample Text 1"
      />
    
    <CollapseMenu
      title="Day 3 |"
      text="Sample Text 1"
      />
    

      </div>

      {/* Include  */}
      <div className="div-container">
      <h2 className='div-container-title'>Inclusions & Exclusions</h2>
      <CollapseMenu
      title="Inclusions"
      text="Sample Text 1"
      />
      <CollapseMenu
      title="Exclusions"
      text="Sample Text 1"
      />
      
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

export default Tour