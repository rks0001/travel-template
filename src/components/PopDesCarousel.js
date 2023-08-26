import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom"
import popDes1 from '../assets/arunachal1.jpg'
import popDes2 from '../assets/arunachal2.jpg'
import popDes3 from '../assets/arunachal3.jpg'
import popDes4 from '../assets/arunachal4.jpg'
import popDes5 from '../assets/arunachal5.jpg'
import popDes6 from '../assets/meghalaya5.jpg'
import './PopDesCarousel.css'


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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


export default class PopDesCarousel extends Component {

  
  render() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2300,
        autoplaySpeed: 2000,
        prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
        cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
      <div className="popdesmain">
        
        <Slider {...settings}>
          
          <div className="single">
          <Link to="/contact" onClick={scrollToTop}>
            <div className="lay1">
              <div><img alt="popdes" src={popDes1}/></div>
            <div className="popdestext2">MEGHALAYA<br/> 4N/5D</div>
            </div>
            <div>
              
            </div>
            
            </Link>
          </div>
          
          <div className="single">
          <Link to="/contact" onClick={scrollToTop}>
            <div className="lay1">
              <div className="leftlay"><img alt="popdes" src={popDes2}/></div>
            <div className="popdestext2">MEGHALAYA<br/> 4N/5D</div>
            </div>
            
            </Link>
          </div>

          <div className="single">
          <Link to="/contact" onClick={scrollToTop}>
            <div className="lay1">
              <div><img alt="popdes" src={popDes3}/></div>
            <div className="popdestext2">MEGHALAYA<br/> 4N/5D</div>
            </div>
            
            </Link>
          </div>

          <div className="single">
          <Link to="/contact" onClick={scrollToTop}>
            <div className="lay1">
              <div><img alt="popdes" src={popDes4}/></div>
            <div className="popdestext2">MEGHALAYA<br/> 4N/5D</div>
            </div>
            
            </Link>
          </div>

          <div className="single">
          <Link to="/contact" onClick={scrollToTop}>
            <div className="lay1">
              <div><img alt="popdes" src={popDes5}/></div>
            <div className="popdestext2">MEGHALAYA<br/> 4N/5D</div>
            </div>
            
            </Link>
          </div>
         
       
        
          
         
        </Slider>
      </div>
    );
  }
}