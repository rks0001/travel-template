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
   
      <div className="title">{props.heading}</div>
      <div className="state">{props.statename}</div>
      {/* PC */}
      <div className="pricecol">
        <div className="leftcol"> 
        {/* L */}
        <div className="price">{props.price}</div>
      <div className="pricecut">{props.pricecut}</div>
      <div className="days">{props.days}</div>
      </div>
      {/* R */}
      <div className="rightcol">
      <div className="knowmore">{props.knowmore}</div>
      </div>
      </div>
     
         
   
      </div>
      </div>
     
      
      <div>
      
   
      </div>
      
    </Link>
    
    </div>
    
  );
}

export default TripData;
