import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // 会社ロゴのパスを適切に設定してください
import menuIcon from '../assets/menu.png'; // メニューアイコンのパスを適切に設定してください
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <img src={logo} alt="Company Logo" className="logo" />
        <nav className="nav-links">
          <Link to="/">TOP</Link>
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/business">BUSINESS</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/contact-us">Contact us</Link>
        </nav>
        <div className="vertical-line"></div>
        <div className="menu" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="popup-menu">
          <div className="popup-header">
            <button className="close-button" onClick={closeMenu}>×</button>
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>
          <div className="menu-links">
            <Link to="/" onClick={closeMenu}>TOP</Link>
            <Link to="/about-us" onClick={closeMenu}>ABOUTUS</Link>
            <Link to="/business" onClick={closeMenu}>BUSINESS</Link>
            <Link to="/projects" onClick={closeMenu}>PROJECTS</Link>
            <Link to="/news" onClick={closeMenu}>NEWS</Link>
            <Link to="/contact-us" onClick={closeMenu}>Contact us</Link>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
