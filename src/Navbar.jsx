import React from 'react'
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import './Navbar.css'

const navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar1">
          <div className="logo">
            <img src="src/assets/blue logo mark.svg" alt="logo" />
            <h1>zynsketch</h1>
          </div>
          <ul className='navbar-menu'>
            <li className='navbar-item'>
              <Link to="/" className='navbar-link'>Home</Link>
            </li>

            <li className='navbar-item'>
              <Link to="/Service" className='navbar-link'>Service</Link>
            </li>

            <li className='navbar-item'>
              <Link to="/Pricing" className='navbar-link'>Pricing</Link>
            </li>

            <li className='navbar-item'>
              <a href='/Contact' className='navbar-link'>Contact us</a>
              </li>
          </ul>
          <div className="btn">Get a quote</div>
        </div>
      </div>
    </div>
  )
}

export default navbar


