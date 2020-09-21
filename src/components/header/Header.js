import React from 'react';
import Navbar from '../navbar/Navbar';
import logo from './images/logo.png';
import './header.css';

function Header() {
  return (
    <div>
      <header>
        <div className="logo-area">
          <img className="logo--img" src={logo} alt="Noter logo" />
          <h1 className="logo--name">Noter</h1>
        </div>
        <Navbar />
      </header>
    </div>
  );
}

export default Header;
