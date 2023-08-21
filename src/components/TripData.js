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
      <div className="statename">{props.statename}</div>
      <div className="textdiv">
      
      <h4>{props.heading}</h4>
      
      {/* <p>{props.text}</p> */}
      <div className="days">{props.days}</div>
      <div className="knowmore">{props.knowmore}</div>
      </div>
      
    </Link>
    
    </div>
    
  );
}

export default TripData;
