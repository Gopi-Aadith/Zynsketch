import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider'; // Adjust the import path if necessary
import './Service.css';  // Import the CSS file

const Service = () => {
  return (
    <div className='service'>

      <div className="service-container">

        <div className="service-content">

          <BeforeAfterSlider
            beforeImage="src/assets/before2.jpg"  // Adjust paths as necessary
            afterImage="src/assets/After2.jpg"
            beforeAlt="Before the service"
            afterAlt="After the service"
          />
          <div className="description">
            <h1>Ecommerce services</h1>
            <p>"Optimized and enhanced images tailored for eCommerce — ready for fast-loading, high-converting product listings."</p>
            <button className='service-button'>Free trial</button>
          </div>
        </div>
      </div>

      <div className="service-buttons">
        <button className='service-cta'>Web optimize</button>
        <button className='service-cta'>Image enchancement</button>
        <button className='service-cta'>Retouching</button>
        <button className='service-cta'>Clip path & Mask</button>
        <button className='service-cta'>Editorial</button>
        <button className='service-cta'>Ghost mannequin</button>
        <button className='service-cta'>File conversion</button>
        <button className='service-cta'>Color correction</button>
        <button className='service-cta'>Background removal</button>
        <button className='service-cta'>Image manipulation</button>
      </div>


    </div>
  )
}

export default Service
