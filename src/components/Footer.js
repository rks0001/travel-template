import "./FooterStyles.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1 className="brandname">ithvaraa</h1>
          
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          
        </div>
      </div>
      <div className="bottom">
        <div className="footerlinks">
          <h4>Contact Us</h4>
          <p>Address: Tezpur, Assam, 784028</p>
          <p>Phone: +91 8822814153</p>
          <p>Email: ithvaraa@gmail.com</p>
        </div>
        <div className="footerlinks">
          <h4>Quick Links</h4>
          <a href="/">Explore Meghalaya</a>
          <a href="/">Explore Arunachal</a>
          <a href="/">Explore Assam</a>
        </div>
        <div className="footerlinks">
          <h4>Important Links</h4>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Refund Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
