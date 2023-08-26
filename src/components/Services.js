import React from 'react'
import './Services.css'
import { TbTrekking } from 'react-icons/tb';
import { GiMountaintop } from 'react-icons/gi';
import { TfiMapAlt } from 'react-icons/tfi';


const Services = () => {

  return (
    <>
        <div className="mainservices">
        <div className='headtext2'>Our Services</div>
        
        <div className="services">
            <div className='singleservice1'><TbTrekking className="iconStyle" /><h3 className="textStyle">ADVENTURE TOURS</h3></div>
          <div className='singleservice1'><GiMountaintop className="iconStyle" /><h3 className="textStyle">SIGHTSEEING TOURS</h3></div>
          <div className='singleservice1'> <TfiMapAlt className="iconStyle" /><h3 className="textStyle">CUSTOMISED TOURS</h3></div>
          <div className='singleservice1'> <TfiMapAlt className="iconStyle" /><h3 className="textStyle">CUSTOMISED TOURS</h3></div>
            </div>
        </div>
          
          
        
            
   
    </>
  )
}

export default Services