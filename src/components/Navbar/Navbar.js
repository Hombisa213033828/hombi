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
          <li>HOME</li>
          <li>ABOUT ME</li>
          <li>EDUCATION</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className='menu-icon' onClick={toggleMenu}>
        <FaBars />
      </div>
    </div>
  );
}
