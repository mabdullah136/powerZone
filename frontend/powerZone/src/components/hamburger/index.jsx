import React, { useState } from "react";
import "./hamburger.scss";

function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-container">
      <button className="hamburger-button" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span> {/* Hamburger Icon */}
      </button>
      {menuOpen && (
        <>
          <div className="hamburger-menu">
            <ul className="hamburger-list">
              <li className="hamburger-item">
                <a href="/" className="hamburger-link">
                  HOME
                </a>
              </li>
              <li className="hamburger-item">
                <a href="/about" className="hamburger-link">
                  ABOUT
                </a>
              </li>
              <li className="hamburger-item">
                <a href="/services" className="hamburger-link">
                  SERVICES
                </a>
              </li>
              <li className="hamburger-item">
                <a href="/member" className="hamburger-link">
                  BECOME A MEMBER
                </a>
              </li>
              <li className="hamburger-item">
                <a href="/classes" className="hamburger-link">
                  CLASSES
                </a>
              </li>
              <li className="hamburger-item">
                <a href="/Gallery" className="hamburger-link">
                  GALLERY
                </a>
              </li>
              <li className="hamburger-item">
                <a href="/contact" className="hamburger-link">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="overrelay"></div>
        </>
      )}
    </div>
  );
}

export default Hamburger;
