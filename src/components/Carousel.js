import React, { Component } from "react";
import Slider from "react-slick";
import review1 from '../assets/review1.mp4';
import review2 from '../assets/review2.mp4';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const videoUrls = [
  review1,
  review2,
  review1,
  review2,
  // Add more video URLs
];

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    &lt;
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    &gt;
  </div>
);

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="gallerymain">
        <h2 className="carhead">What People Say About Us?</h2>
        <Slider {...settings} className="mainslide">
          {videoUrls.map((url, index) => (
            <div className="single1" key={index}>
              <video
                // width="520"
                // height="420"
                controls
                // autoPlay
                // muted
                // loop
              >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
