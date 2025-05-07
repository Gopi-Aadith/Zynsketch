import styles from './Footer.module.css';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <img src="src/assets/logo mark green.svg" alt="logo" />
          ZYNSKETCH
        </div>

        <div className={styles.linksGrid}>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Media Kit</li>
            </ul>
          </div>
          {/* <div>
            <h4>Product</h4>
            <ul>
              <li>Pricing</li>
              <li>Pixelz Solutions</li>
              <li>API Documentation</li>
              <li>Support</li>
            </ul>
          </div> */}
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Zynsketch. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
