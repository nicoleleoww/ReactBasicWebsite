import React from 'react';
import {Navbar} from './Navbar/Navbar';

export function Header() {
  return (
    <div className="main">
      <Navbar />
      <div className="name">
        <h2 className="heading">Hi there!</h2>

        <h1>I'm <span>Nicole</span> Leow</h1>

        <p className="details">
        I am a motivated and accomplished second-year student pursuing a dual degree in Mechatronics Engineering and Computer Science. 
        As a member of the executive team in the UNSW Mechatronics Society and an active participant in the UNSW BlueSat UAV team, I have honed my leadership and technical skills through various projects and initiatives.
        Furthermore, I am currently contributing to the UNSW VIP Connected Health team, collaborating with experts in the field to leverage machine learning and statistical analysis techniques to enhance the accuracy of surgical removal of cancerous oral lesions. 
        Moving forward, I am eager to continue gaining technical experience and build valuable connections within the computing industry..
        </p>

        <div className="header-btns">
          <a href="#" className="btn-1">Email Me</a>
          <a href="#" className="btn-2">Download CV</a>
        </div>
      </div>
    </div>
  )
}

// export default Header
