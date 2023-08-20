import React from 'react'
import {FaWhatsappSquare} from 'react-icons/fa'
import whatsapp from '../assets/whatsapp-logo.png'

const myStyles = {
    position:"fixed",
    bottom:"30px",
    right:"20px",
    } 

    const btnStyles = {
        width:"50px",
        zIndex:100,
        

        } 
const WhatsApp = () => {

   
  return (
    <div style={myStyles}>
        <a href="https://wa.me/919866463680" target='_blank'><img alt="whatsapp" src={whatsapp} style={btnStyles}/></a>
    </div>
  )
}

export default WhatsApp