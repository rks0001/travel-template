import "./HeroStyles.css";
import React from 'react';
import {Link} from 'react-router-dom'

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroimage" src={props.heroImg}/>
        <div className={props.cName2}>
          <h1>{props.title}</h1>
          
          <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
