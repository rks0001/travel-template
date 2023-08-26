import React from 'react'
import './Section2.css'
import PopDesCarousel from './PopDesCarousel'

const Section2 = () => {
  return (
    <div className='sectiontwomain'>
        
        <div className='sec2text'>Popular Destinations</div>
        <div className='sec2text2'>These are some of the properly curated plans  </div>
        <button className='sec2btn'>Explore</button>
        <PopDesCarousel/>
      
    </div>
  )
}

export default Section2