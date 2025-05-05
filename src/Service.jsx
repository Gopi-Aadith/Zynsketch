import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider'; // Adjust the import path if necessary
import './Service.css';  // Import the CSS file

const serviceData = {
  "Web optimize": {
    title: "Web Optimization",
    description: "Optimize your website’s performance with expertly compressed and resized images. Maintain high visual quality while significantly reducing load times. Ideal for improving SEO, user engagement, and overall browsing experience without compromising image clarity or detail.",
    beforeImage: "src/assets/web_before.jpg",
    afterImage: "src/assets/web_after.jpg"
  },
  "Image enchancement": {
    title: "Image Enhancement",
    description: "Transform ordinary images into stunning visuals with our image enhancement services. We improve brightness, contrast, sharpness, and clarity to bring out the best in every photo—perfect for eCommerce, portfolios, and high-quality presentations.",
    beforeImage: "src/assets/before2.jpg",
    afterImage: "src/assets/After2.jpg"
  },
  "Retouching": {
    title: "Image Retouching",
    description: "Polished and professional images through expert retouching.",
    beforeImage: "src/assets/retouch_before.jpg",
    afterImage: "src/assets/retouch_after.jpg"
  },
  "Clip path & Mask": {
    title: "Clip Path & Masking",
    description: "Clean and precise clipping paths for perfect cutouts.",
    beforeImage: "src/assets/clip_before.jpg",
    afterImage: "src/assets/clip_after.jpg"
  },
  "Editorial": {
    title: "Editorial Processing",
    description: "Tailored images for magazines, blogs, and media.",
    beforeImage: "src/assets/editorial_before.jpg",
    afterImage: "src/assets/editorial_after.jpg"
  },
  "Ghost mannequin": {
    title: "Ghost Mannequin",
    description: "Show off apparel without distractions with ghost mannequin editing.",
    beforeImage: "src/assets/ghost_before.jpg",
    afterImage: "src/assets/ghost_after.jpg"
  },
  "File conversion": {
    title: "File Conversion",
    description: "Convert image formats efficiently with no quality loss.",
    beforeImage: "src/assets/convert_before.jpg",
    afterImage: "src/assets/convert_after.jpg"
  },
  "Color correction": {
    title: "Color Correction",
    description: "Adjust hues and tones for vibrant, accurate color representation.",
    beforeImage: "src/assets/color_before.jpg",
    afterImage: "src/assets/color_after.jpg"
  },
  "Background removal": {
    title: "Background Removal",
    description: "Remove or replace backgrounds for cleaner product displays.",
    beforeImage: "src/assets/bg_before.jpg",
    afterImage: "src/assets/bg_after.jpg"
  },
  "Image manipulation": {
    title: "Image Manipulation",
    description: "Creative and surreal edits to transform your visuals.",
    beforeImage: "src/assets/manipulate_before.jpg",
    afterImage: "src/assets/manipulate_after.jpg"
  }
};

const Service = () => {

  // ✅ Define selected and current service states
  const defaultService = "Web optimize";
  const [currentService, setCurrentService] = useState(serviceData[defaultService]);
  const [selectedService, setSelectedService] = useState(defaultService);

  // ✅ Change handler for buttons
  const handleServiceChange = (serviceName) => {
    setCurrentService(serviceData[serviceName]);
    setSelectedService(serviceName);
  };

  return (
    <div className='service'>

      <div className="service-container">

        <div className="service-content">

          <BeforeAfterSlider
            beforeImage={currentService.beforeImage}  // Adjust paths as necessary
            afterImage={currentService.afterImage}
            beforeAlt="Before the service"
            afterAlt="After the service"
          />
          <div className="description">
            <h1>{currentService.title}</h1>
            <p>{currentService.description}</p>
            {/* <button className='service-button'>Free trial</button> */}
          </div>
        </div>
      </div>

      {/* <div className="service-buttons">
        {Object.keys(serviceData).map((serviceName) => (
            <button
              key={serviceName}
              className={`service-cta ${selectedService === serviceName ? 'active' : ''}`}
              onClick={() => handleServiceChange(serviceName)}
            >
              {serviceName}
            </button>
          ))}
      </div> */}


    </div>
  )
}

export default Service
