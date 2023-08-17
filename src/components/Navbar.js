import React, { useState, useEffect } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");

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
      setNavbarBackground("#1f1f1f");
    } else {
      setNavbarBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="NavbarItems" style={{ background: navbarBackground }}>
      <h1 className="navbar-logo"> <Link onClick={scrollToTop} to="/"> CherishTravels</Link></h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <div key={index} className="linksdiv">
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
    </nav>
  );
};

export default Navbar;
