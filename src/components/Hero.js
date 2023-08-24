import "./HeroStyles.css";
import React from 'react';
import {Link} from 'react-router-dom'

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroimage" src={props.heroImg}/>
        <div className={props.cName2}>
          <h1>Welcome to <span className="itext">ithvaraa</span></h1>
          <div className="tagline">{props.text}</div>
          <Link to={props.url} className={props.btnClass}>{props.buttonText}</Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
