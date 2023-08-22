import React, { useState, useEffect } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo1 from '../assets/ithvaraa.jpg'


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("#fff");
  const [navlinkColor, setNavlinkColor] = useState("#f9f9f9");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavbarBackground("#fff");
      setNavlinkColor("#1f1f1f")
    } else {
      setNavbarBackground("#fff");
      setNavlinkColor("#f9f9f9")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
 <div className="NavbarItems" style={{ background: navbarBackground }}>
      <h1 className="navbar-logo"> <Link onClick={scrollToTop} to="/"> <img className="logo-img" alt="logo" src={logo1} /></Link></h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <div key={index} className="linksdiv"  >
             <li>
            <Link
              onClick={() => {
                scrollToTop();
                closeMenu(); // Close the menu when an item is clicked
              }}
              className={item.cName}
              to={item.url}
            >
              {item.title}
            </Link>
          </li>
          </div>
         
        ))}
      </ul>
    </div>
    </div>
   
  );
};

export default Navbar;
