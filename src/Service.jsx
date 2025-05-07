import React from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'
import './Service.css'

const Service = () => {
  return (
    <div>
      <div className="servicepage">

        <div className="serviceCard">

          <div className="serviceImage">
            <BeforeAfterSlider
              beforeImage="src/assets/before3.jpg"
              afterImage="src/assets/After3.jpg"
              beforeAlt="Before Service"
              afterAlt="After Service"
            />
          </div>

          <div className="serviceContent">
            <h3>Background Removal</h3>
            <p>
              Enhance your product photos, portraits, and graphics with clean, distraction-free backgrounds. Our expert background removal service ensures precision, consistency, and fast turnaround—perfect for e-commerce, marketing, or personal use.
            </p>
          </div>
          
        </div>

        <div className="line"></div>

        <div className="serviceCard">
          
          <div className="serviceContent">
            <h3>Background Removal</h3>
            <p>
              Enhance your product photos, portraits, and graphics with clean, distraction-free backgrounds. Our expert background removal service ensures precision, consistency, and fast turnaround—perfect for e-commerce, marketing, or personal use.
            </p>
          </div>

          <div className="serviceImage">
            <BeforeAfterSlider
              beforeImage="src/assets/before3.jpg"
              afterImage="src/assets/After3.jpg"
              beforeAlt="Before Service"
              afterAlt="After Service"
            />
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Service
