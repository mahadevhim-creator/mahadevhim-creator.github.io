import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Keshav</h2>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#work" onClick={() => setIsOpen(false)}>Work</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;