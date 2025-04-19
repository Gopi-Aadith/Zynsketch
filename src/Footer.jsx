// Updated Footer.jsx
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <h2 className="logo-1">zynsketch</h2>
          <p className="tagline">Where pixels meet perfection</p>
          <div className="social-container">
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
            <a href="#" className="social-icon"><FaEnvelope /></a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h4 className="section-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h4 className="section-title">Get in Touch</h4>
          <div className="contact-info">
            <p>Ready to elevate your visuals?</p>
            <a href="mailto:contact@zynsketch.com" className="email-link">
              contact@zynsketch.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} zynsketch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;