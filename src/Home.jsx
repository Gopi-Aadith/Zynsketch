import React from 'react'
import AccordionSection from './AccordionSection';
import FaqSection from './FaqSection';
import Footer from './Footer'

import './Home.css'

const home = () => {
  return (
    <div>

      <div className="home">

        <div className="hero">

          <div className="section1">

            <h1>YOUR POST PRODUCTION PARTNER</h1>
            <h2>we specialize in delivering top-tier post-production services that bring your visuals to life. Whether you're a photographer, e-commerce brand, real estate agent, or creative studio, we help you turn raw images into polished masterpieces.</h2>

            <div className="buttons">
                <div className="CTA"><span>GET STARTED</span></div>
                <div className="CTA"><span>OUR WORK</span></div>
            </div>

          </div>
        
          <div className="section2">

            <div className="imagecard1">
              <img src="src/assets/2780J-VACATION_9206 (1).jpg" alt="image" />
            </div>

            <div className="imagecard2">
              <img src="src/assets/2780J-VACATION_9210.jpg" alt="image" />
            </div>

            <div className="imagecard3">
              <img src="src/assets/2780J-VACATION_9214.jpg" alt="image" />
            </div>

          </div>

        </div>

      </div>

      <AccordionSection />
      <FaqSection />
      <Footer/>


    </div>
  )
}

export default home
