import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-header'>
      <div className={`nav-container ${isOpen ? 'active' : ''}`}>
        <ul className={isOpen ? 'active' : ''}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="ContactForm"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              ContactForm
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}


