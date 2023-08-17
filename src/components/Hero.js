import "./HeroStyles.css";
import React from 'react';
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroimage" src={props.heroImg}/>
        <div className={props.cName2}>
          <h1>{props.title}</h1>
          
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
