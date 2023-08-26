import React from 'react'
import './Section3.css'
import Trip from './Trip'


const Section3 = () => {
  return (
    <div className='sectionthreemain'>
        <div className="left3">
        <div className='sec3text'>Discover Tours</div>
        <div className='sec3text2'>These are some of the properly curated plans  </div>
        <button className='sec3btn'>Know More</button>
        </div>
        <div className="right3">
       <Trip/>
        </div>
    </div>
  )
}

export default Section3