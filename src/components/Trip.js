import "./TripStyles.css";
import TripData from "./TripData";
import Meghalaya1 from "../assets/meghalaya2.jpg";
import Arunachal1 from "../assets/arunachal4.jpg";
import Assam1 from "../assets/assam1.jpg";
import React from 'react';
function Trip() {
  return (
    <div className="trip">
      <h1>Discover Tours</h1>
      <p className="description">THERE'S A TOUR FOR EVERYONE</p>
      <div className="tripcard">
        <TripData
        image={Meghalaya1}
        statename="MEGHALAYA"
        heading="Explore Meghalaya"
        url="/explore-meghalaya"
        pricecut="₹ 25,599"
        price="₹ 21,499"
        text="lorem"
        days="6N/7D"
        knowmore="Know More>"
        />
         <TripData
        image={Arunachal1}
        statename="ARUNACHAL"
        heading="Explore Tawang"
        url="/"
        pricecut="₹ 25,599"
        price="₹ 21,499"
        text="lorem"
        days="6N/7D"
        knowmore="Know More>"
        />
         <TripData
        image={Assam1}
        statename="ASSAM"
        heading="Explore Kaziranga"
        url="/"
        pricecut="₹ 25,599"
        price="₹ 21,499"
        text="lorem"
        days="6N/7D"
        knowmore="Know More>"
        />
        
      </div>
      <div className="tripcard">
        <TripData
        image={Meghalaya1}
        statename="MEGHALAYA"
        heading="Explore Meghalaya"
        url="/explore-meghalaya"
        pricecut="₹ 25,599"
        price="₹ 21,499"
        text="lorem"
        days="6N/7D"
        knowmore="Know More>"
        />
         <TripData
        image={Arunachal1}
        statename="ARUNACHAL"
        heading="Explore Tawang"
        url="/"
        pricecut="₹ 25,599"
        price="₹ 21,499"
        text="lorem"
        days="6N/7D"
        knowmore="Know More>"
        />
         <TripData
        image={Assam1}
        statename="ASSAM"
        heading="Explore Kaziranga"
        url="/"
        pricecut="₹ 25,599"
        price="₹ 21,499"
        text="lorem"
        days="6N/7D"
        knowmore="Know More>"
        />
        
      </div>
    </div>
  );
}

export default Trip;
