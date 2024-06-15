import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook.png'; // 画像ファイルのパスを修正
import instagramIcon from '../assets/Mail.png'; // 画像ファイルのパスを修正
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <div className="footer-company">
          <div className="footer-company-name">toten inc.</div>
          <div className="footer-company-address">〒245-0061 神奈川県横浜市戸塚区汲沢1-1-19</div>
          <div className="footer-social-icons">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
            <img src={instagramIcon} alt="Mail" className="social-icon" />
          </div>
        </div>
        <div className="footer-links">
          <Link to="/" className="footer-link">Top</Link>
          <Link to="/contact-us" className="footer-link">Contact us</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy policy</Link>
          <Link to="/terms-of-service" className="footer-link">利用規約</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">©︎ 2024 toten Inc.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
