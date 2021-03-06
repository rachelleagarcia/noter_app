import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-area">
      <ul className="navbar-links">
        <li className="navbar-items--top">
          <Link className="navbar-links--main" to="/">
            All Notes
          </Link>
        </li>
        <li className="navbar-item">
          <div className="navbar-categories">
            <h2 className="navbar-subtitle">Categories</h2>
            <ul className="categories-list">
              <li className="categories-item">
                <span className="work-dot dot"></span>
                Work
              </li>
              <li className="categories-item">
                <span className="school-dot dot"></span>
                School
              </li>
              <li className="categories-item">
                <span className="personal-dot dot"></span>
                Personal
              </li>
              <li className="categories-item">
                <span className="holiday-dot dot"></span>
                Holiday
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
