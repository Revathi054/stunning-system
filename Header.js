

// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">NewsApp</Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
