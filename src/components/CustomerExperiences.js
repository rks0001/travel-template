import React, { useState } from 'react';
import './CustomerExperiences.css';

const CustomerExperiences = ({ videoUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      // Decrement index, looping back to the end if it's less than 0
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? videoUrls.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      // Increment index, looping back to the start if it's greater than or equal to the array length
      setCurrentIndex((prevIndex) => (prevIndex === videoUrls.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className="video-carousel">
      <button className="carousel-button prev-button" onClick={handlePrev}>
        Previous
      </button>
      <div className="video-container">
        <video controls width="560" height="315">
          <source src={videoUrls[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="carousel-button next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default CustomerExperiences;
