import React from 'react'
import './Footer.css'
import './Contact'
import Contact from './Contact'

const Footer = () => {
  return (
    <div>
      <div className="Foot">
       <div className="content">
            <div className="quicklinks">
                <h6>Quicklinks</h6>
                <p>Home</p>
                <p>Services</p>
                <p>Pricing</p>
                <p>Contact us</p>
            </div>

            <div className="contactus">
                <Contact/>
            </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
