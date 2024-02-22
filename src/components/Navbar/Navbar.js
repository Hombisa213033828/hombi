import React, { useState } from 'react';
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
          <li>Home</li>
          <li>Education</li>
          <li>Portfolio</li>
          <li>ContactForm</li>
        </ul>
      </div>
    </div>
  );
}



