import "./TripStyles.css";
import { Link } from "react-router-dom";
import React from 'react';
function TripData(props) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="t-card">
    <Link onClick={scrollToTop} to={props.url}>
      <div className="t-image">
        <img alt="image" src={props.image}/>
      </div>
      <div className="textdiv">
      <p className="statename">{props.statename}</p>
      <h4>{props.heading}</h4>
      
      <p>{props.text}</p>
      <p>{props.days}</p>
      <div>{props.knowmore}</div>
      </div>
      
    </Link>
    
    </div>
    
  );
}

export default TripData;
