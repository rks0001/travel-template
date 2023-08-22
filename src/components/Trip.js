import "./TripStyles.css";
import TripData from "./TripData";
import Meghalaya1 from "../assets/meghalaya2.jpg";
import Arunachal1 from "../assets/arunachal4.jpg";
import Assam1 from "../assets/assam1.jpg";
import React from 'react';
function Trip() {
  return (
    <div className="trip">
      <h1>DISCOVER TOURS</h1>
      <p className="description">Tours that Transcend</p>
      <div className="tripcard">
        <TripData
        image={Meghalaya1}
        statename="MEGHALAYA"
        heading="Explore Meghalaya"
        url="/explore-meghalaya"
        price="₹ 21,499"
        text="lorem"
        days="6N/7D"
        knowmore="Know More>"
        />
         <TripData
        image={Arunachal1}
        statename="ARUNACHAL PRADESH"
        heading="Explore Tawang"
        url="/"
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
