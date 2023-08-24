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
      <div className="firstrow">
      <div className="t-image">
        <img alt="image" src={props.image}/>
   
      </div>

    {/* tt */}
    <div className="textdiv">
      <h4>{props.heading}</h4>
      <div className="state">{props.statename}</div>
      <div className="price">{props.price}</div>
      <div className="days">{props.days}</div>
         
      <div className="knowmore">{props.knowmore}</div>
      </div>
      </div>
     
      
      <div>
      
   
      </div>
      
    </Link>
    
    </div>
    
  );
}

export default TripData;
