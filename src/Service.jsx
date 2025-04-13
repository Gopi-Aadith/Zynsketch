import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider'; // Adjust the import path if necessary
import './Service.css';  // Import the CSS file

const ServicePage = () => {
  return (
    <div className="service-page">
      <header className="service-page-header">
        <h1>Our Amazing Service</h1>
        <p>Check out the before and after images of our service!</p>
      </header>

      <section className="service-content">
        <h2>Before and After Results</h2>
        <p>Here you can see the transformation that our service brings.</p>
        
        {/* Before and After Slider Component */}
        <BeforeAfterSlider
          beforeImage="src/assets/before2.jpg"  // Adjust paths as necessary
          afterImage="src/assets/After2.jpg"
          beforeAlt="Before the service"
          afterAlt="After the service"
        />
      </section>

      <footer className="service-footer">
        <p>&copy; 2025 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServicePage;
