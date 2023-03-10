import React from 'react';

export function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        NICOLE'S WEBSITE
      </a>

      <input className="menu-btn" type="checkbox"/>
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>

      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <a href="#" className="Hey">Hey!</a>
    </nav>
  )
}

// export default Navbar
