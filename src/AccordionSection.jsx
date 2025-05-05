import React, { useState } from 'react';
import Chevron from '../src/assets/right-arrow.svg';
import ecom from '../src/assets/e-com.jpg';
import editorial from '../src/assets/editorial.jpeg';
import './AccordionSection.css';

const panels = [
  {
    key: 'ecom',
    title: 'E-commerce',
    items: ['Background Removal', 'Color Correction', 'Clipping Path', 'Retouching', 'Ghost Mannequin'],
    img: ecom,
  },
  {
    key: 'editorial',
    title: 'Editorial',
    items: ['Clipping Path', 'Clean Up', 'Subjective Edits', 'Retouching'],
    img: editorial,
  },
];

export default function AccordionSection() {
  const [active, setActive] = useState('ecom');      // which accordion is open
  const [selected, setSelected] = useState('ecom');  // which image is displayed

  const handleToggle = (key) => {
    setActive(prev => (prev === key ? null : key));  // toggle open/close
    setSelected(key);                                // always update image
  };

  return (
    <section className="accordion-section">
      <div className="accordion-header-container">
        <h2 className="section-heading">Professional Photo Editing Services</h2>
        <p className="section-subheading">High-volume image processing with 24-hour delivery</p>
      </div>

      <div className="accordion-grid">
        {/* Left: Panels */}
        <div className="accordion-items-container">
          {panels.map(panel => (
            <div key={panel.key} className={`accordion-card ${active === panel.key ? 'active' : ''}`}>
              <button
                className="accordion-header"
                onClick={() => handleToggle(panel.key)}
              >
                <span>{panel.title}</span>
                <img
                  src={Chevron}
                  alt="Toggle"
                  className={`accordion-chevron ${active === panel.key ? 'active' : ''}`}
                />
              </button>

              <div className="accordion-content">
                <div className="service-list">
                  {panel.items.map((item, index) => (
                    <div key={index} className="service-item">
                      <div className="service-dot"></div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="accordion-image-mobile">
                  <img src={panel.img} alt={panel.title} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Fixed image based on last selection */}
        <div className="accordion-preview">
          <img
            src={panels.find(p => p.key === selected)?.img}
            alt="Service Preview"
          />
        </div>
      </div>
    </section>
  );
}
