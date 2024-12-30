import images from "../../assets";
import "./header.scss";
import Hamburger from "../hamburger/index";

import React, { useState, useEffect } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo_container">
        <img src={images.logo} alt="logo" className="image" />
        <h1 className="header_title">Power Zone</h1>
      </div>
      {isMobile ? (
        <Hamburger />
      ) : (
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="/" className="nav_link">
                HOME
              </a>
            </li>
            <li className="nav_item">
              <a href="/about" className="nav_link">
                ABOUT
              </a>
            </li>
            <li className="nav_item">
              <a href="/services" className="nav_link">
                SERVICES
              </a>
            </li>
            <li className="nav_item">
              <a href="/member" className="nav_link">
                BECOME A MEMBER
              </a>
            </li>
            <li className="nav_item">
              <a href="/classes" className="nav_link">
                CLASSES
              </a>
            </li>
            <li className="nav_item">
              <a href="/Gallery" className="nav_link">
                GALLERY
              </a>
            </li>
            <li className="nav_item">
              <a href="/contact" className="nav_link">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
