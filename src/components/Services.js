import React from 'react'
import './Services.css'
import { TbTrekking } from 'react-icons/tb';
import { GiMountaintop } from 'react-icons/gi';
import { GrMapLocation } from 'react-icons/gr';

const Services = () => {
  const style = { color: "#121212", fontSize: "5rem" }
  return (
    <>
        <div className="mainservices">
            <div className="services">
            <div><TbTrekking style={style} /><h3>ADVENTURE TOURS</h3></div>
          <div><GiMountaintop style={style} /><h3>SIGHTSEEING TOURS</h3></div>
          <div><GrMapLocation style={style} /><h3>CUSTOMISED TOURS</h3></div>
            </div>
        </div>
    </>
  )
}

export default Services