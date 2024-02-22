import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa'; // Import the hamburger menu icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-header'>
      <div className={`nav-container ${isOpen ? 'active' : ''}`}>
        <ul className={isOpen ? 'active' : ''}>
          <li><a href="#home"></a>Home</li>
          <li><a href="#Education"></a>Education</li>
          <li><a href="#Portfolio"></a>Portfolio</li>
          <li><a href="#ContactForm"></a>ContactForm</li>
        </ul>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  );
}
