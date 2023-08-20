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

class CustomNextArrow extends React.Component {
  handleClick = () => {
    const currentSlideIndex = this.props.currentSlide;
    if (this.props.videoRefs[currentSlideIndex]) {
      this.props.videoRefs[currentSlideIndex].play();
    }

    this.props.videoRefs.forEach((video, index) => {
      if (index !== currentSlideIndex) {
        video.pause();
      }
    });

    this.props.onClick();
  };

  render() {
    return (
      <div className="custom-arrow custom-next" onClick={this.handleClick}>
        &gt;
      </div>
    );
  }
}

export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.videoRefs = [];
  }

  handleVideoEnd = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
    }
  }

  handleSlideChange = currentSlide => {
    const previousSlideIndex = currentSlide - 1;
    if (this.videoRefs[previousSlideIndex]) {
      this.videoRefs[previousSlideIndex].pause();
    }
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow videoRefs={this.videoRefs} currentSlide={0} />,
      cssEase: "linear",
      afterChange: this.handleSlideChange,
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
        <h2 className="carhead">WHAT PEOPLE SAY ABOUT US?</h2>
        <Slider {...settings} className="mainslide" ref={this.sliderRef}>
          {videoUrls.map((url, index) => (
            <div className="single1" key={index}>
              <video
                ref={el => (this.videoRefs[index] = el)}
                // width="520"
                // height="420"
                controls
                // autoPlay
                // muted
                // loop
                onEnded={this.handleVideoEnd}
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
