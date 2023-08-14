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
      <p className="statename">{props.statename}</p>
      <div className="textdiv">
      
      <h4>{props.heading}</h4>
      
      {/* <p>{props.text}</p> */}
      <p className="days">{props.days}</p>
      <div className="knowmore">{props.knowmore}</div>
      </div>
      
    </Link>
    
    </div>
    
  );
}

export default TripData;
