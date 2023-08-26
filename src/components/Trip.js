import "./TripStyles.css";
import TripData from "./TripData";
import Meghalaya1 from "../assets/meghalaya2.jpg";
import Arunachal1 from "../assets/arunachal4.jpg";
import Assam1 from "../assets/assam1.jpg";
import React from 'react';
function Trip() {
  return (
    <div className="trip">
      
      <div className="tripcard">
        <TripData
        image={Meghalaya1}
        statename="MEGHALAYA"
        heading="Explore Meghalaya"
        story="One of the most beautiful states in India, Meghalaya will amaze you in number of unimaginable ways. From its sheer natural beauty in the form of countless waterfalls, calm lakes and pristine rivers to humble people and their matrilineal culture, Meghalaya lures you into a different world altogether
        A world where locals do not use nature for profits but live in harmony with it, be it using living roots of trees to build natural bridges or protecting the rare flora in sacred forests or inhabiting wettest place on earth. Any of this amazes you? Now join us to show you the best of Meghalaya and make a memorable trip for you! 
        "
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
        story="One of the most beautiful states in India, Meghalaya will amaze you in number of unimaginable ways. From its sheer natural beauty in the form of countless waterfalls, calm lakes and pristine rivers to humble people and their matrilineal culture, Meghalaya lures you into a different world altogether
        A world where locals do not use nature for profits but live in harmony with it, be it using living roots of trees to build natural bridges or protecting the rare flora in sacred forests or inhabiting wettest place on earth. Any of this amazes you? Now join us to show you the best of Meghalaya and make a memorable trip for you! 
        "
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
        story="One of the most beautiful states in India, Meghalaya will amaze you in number of unimaginable ways. From its sheer natural beauty in the form of countless waterfalls, calm lakes and pristine rivers to humble people and their matrilineal culture, Meghalaya lures you into a different world altogether
        A world where locals do not use nature for profits but live in harmony with it, be it using living roots of trees to build natural bridges or protecting the rare flora in sacred forests or inhabiting wettest place on earth. Any of this amazes you? Now join us to show you the best of Meghalaya and make a memorable trip for you! 
        "
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
        story="One of the most beautiful states in India, Meghalaya will amaze you in number of unimaginable ways. From its sheer natural beauty in the form of countless waterfalls, calm lakes and pristine rivers to humble people and their matrilineal culture, Meghalaya lures you into a different world altogether
        A world where locals do not use nature for profits but live in harmony with it, be it using living roots of trees to build natural bridges or protecting the rare flora in sacred forests or inhabiting wettest place on earth. Any of this amazes you? Now join us to show you the best of Meghalaya and make a memorable trip for you! 
        "
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
