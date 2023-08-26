import React from 'react'
import {FaWhatsappSquare} from 'react-icons/fa'
import whatsapp from '../assets/whatsapp-logo.png'

const myStyles = {
    position:"fixed",
    bottom:"30px",
    right:"20px",
    } 

    const linkStyle = {
      textDecoration:"none",
      color:"#312E1B",
      fontWeight:"600"
      } 

    const btnStyles = {
        width:"50px",
        zIndex:100,
        

        } 
const WhatsApp = () => {

   
  return (
    <div style={myStyles}>
        <a style={linkStyle} href="https://wa.me/919866463680" target='_blank'><img alt="whatsapp" src={whatsapp} style={btnStyles}/><br/>Contact Us</a>
    </div>
  )
}

export default WhatsApp