import React, { useState, useRef, useEffect } from 'react';
import Chevron from '../src/assets/right-arrow.svg';
import './FaqSection.css';

const faqItems = [
  {
    question: "What's your typical turnaround time?",
    answer: "Standard delivery within 24-48 hours depending on project complexity."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes, we provide special pricing for high-volume projects."
  },
  {
    question: "What file formats do you accept?",
    answer: "We support all major formats: JPG, PNG, PSD, TIFF, RAW files."
  },
  {
    question: "How do you ensure quality?",
    answer: "Triple-check quality assurance process with expert reviewers."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    faqItems.forEach((_, index) => {
      const content = contentRefs.current[index];
      if (content) {
        if (activeIndex === index) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0px';
        }
      }
    });
  }, [activeIndex]);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`faq-card ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-header"
                onClick={() => setActiveIndex(prev => prev === index ? null : index)}
              >
                <span>{item.question}</span>
                <img 
                  src={Chevron} 
                  alt="Toggle" 
                  className={`faq-chevron ${activeIndex === index ? 'active' : ''}`} 
                />
              </button>
              
              <div
                className="faq-content"
                ref={el => (contentRefs.current[index] = el)}
              >
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
