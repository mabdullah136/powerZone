import React, { useState } from "react";
import "./footer.scss";
import images from "../../assets";

function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <footer className="footer">
      <div className="headerText-container">
        <h1 className="headerText">ABOUT GYM</h1>
        <p className="text">
          Welcome to Power Zone Health & Fitness club, Amanah Mall. Here at
          Power Zone Fitness Club, we are offering a wide range of fitness
          services like Functional Training’s
        </p>
      </div>
      <div className="headerText-container">
        <h1 className="headerText">FOLLOW US ON INSTAGRAM</h1>
        <p className="text">
          Welcome to Power Zone Health & Fitness club, Amanah Mall. Here at
          Power Zone Fitness Club, we are offering a wide range of fitness
          services like Functional Training’s.
        </p>
      </div>
      <div className="headerText-container">
        <h1 className="headerText quickAccess">QUICK ACCESS</h1>
        <ul className="footer-list">
          <li>
            <a href="/" className="footer-link">
              HOME
            </a>
          </li>
          <li>
            <a href="/about" className="footer-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="/services" className="footer-link">
              SERVICES
            </a>
          </li>
          <li>
            <a href="/member" className="footer-link">
              BECOME A MEMBER
            </a>
          </li>
          <li>
            <a href="/classes" className="footer-link">
              CLASSES
            </a>
          </li>
          <li>
            <a href="/Gallery" className="footer-link">
              GALLERY
            </a>
          </li>
          <li>
            <a href="/contact" className="footer-link">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div className="headerText-container">
        <h1 className="headerText">CONTACT US</h1>
        <p className="text">
          Welcome to Power Zone Health & Fitness club, Amanah Mall. Here at
          Power Zone Fitness Club, we are offering a wide range of fitness
          services like Functional Training’s.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
