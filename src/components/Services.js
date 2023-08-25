import React from 'react'
import './Services.css'
import { TbTrekking } from 'react-icons/tb';
import { GiMountaintop } from 'react-icons/gi';
import { TfiMapAlt } from 'react-icons/tfi';


const Services = () => {
  const style = { color: "#f9f9f9", fontSize: "5rem" }
  const textStyle = { color: "#f9f9f9", fontSize: "1.3rem" , padding:"1rem"}
  return (
    <>
        <div className="mainservices">
        <div className='headtext2'>Our Services</div>
            <div className="services">
            <div className='singleservice'><TbTrekking style={style} /><h3 style={textStyle}>ADVENTURE TOURS</h3></div>
          <div className='singleservice'><GiMountaintop style={style} /><h3 style={textStyle}>SIGHTSEEING TOURS</h3></div>
          <div className='singleservice'> <TfiMapAlt style={style} /><h3 style={textStyle}>CUSTOMISED TOURS</h3></div>
            </div>
        </div>
    </>
  )
}

export default Services