// Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const initial = { name: '', email: '', project: '', services: [] };
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});
  
  const servicesList = [
    'Website Design', 'Content Creation', 'UX Design',
    'Strategy & Consulting', 'User Research', 'Other'
  ];

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value] 
          : prev.services.filter(s => s !== value)
      }));
    } else {
      setData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Valid email required';
    if (!data.project.trim()) errs.project = 'Project description required';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Submission data:', data);
      alert('Thank you for your inquiry!');
      setData(initial);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Information Panel */}
        <div className="contact-info-panel">
          <h2 className="brand-logo">zynsketch</h2>
          
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Chat to us</h3>
              <p>hi@zynsketch.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Visit us</h3>
              <p>Creative Studio District<br/>Digital City, DC 10001</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Call us</h3>
              <p>Mon-Fri: 8am - 6pm<br/>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="contact-form-panel">
          <div className="form-header">
            <h1>Got Vision? We've Got Skills</h1>
            <p>Let's collaborate to bring your ideas to life</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`form-input ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="work@email.com"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="input-group">
              <textarea
                name="project"
                value={data.project}
                onChange={handleChange}
                placeholder="Describe your project..."
                className={`form-textarea ${errors.project ? 'input-error' : ''}`}
                rows="4"
              />
              {errors.project && <span className="error-message">{errors.project}</span>}
            </div>

            <fieldset className="services-group">
              <legend>How can we assist?</legend>
              <div className="services-grid">
                {servicesList.map((service, index) => (
                  <label key={index} className="service-option">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={data.services.includes(service)}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    {service}
                  </label>
                ))}
              </div>
            </fieldset>

            <button type="submit" className="submit-button">
              <span className="button-text">Launch Project</span>
              <div className="button-gradient"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}