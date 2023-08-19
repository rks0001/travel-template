import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../assets/meghalaya.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      {/* Add your custom arrow icon or content here */}
      &lt; {/* Example: Left arrow */}
    </div>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      {/* Add your custom arrow icon or content here */}
      &gt; {/* Example: Right arrow */}
    </div>
  );


export default class Responsive extends Component {

   
    render() {
      var settings = {
        dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1300,
      autoplaySpeed: 2200,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      cssEase: "linear",
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
     
        <h2>Gallery</h2>
       
        <Slider {...settings} className="mainslide">
          <div className="single">
            <img alt="car" src={img1}/>
          </div>
          <div className="single">
          <img alt="car" src={img1}/>
          </div>
          <div className="single">
          <img alt="car" src={img1}/>
          </div>
          <div className="single">
          <img alt="car" src={img1}/>
          </div>
          <div className="single">
          <img alt="car" src={img1}/>
          </div>
          <div className="single">
          <img alt="car" src={img1}/>
          </div>
        </Slider>
      </div>
    );
  }
}