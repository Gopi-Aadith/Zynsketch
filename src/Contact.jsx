
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="touch">
            <h2>Get in Touch</h2>
          <p><strong>Email:</strong> support@zynsketch.com</p>
          <p><strong>Phone:</strong> +91 8610665718</p>
          <p><strong>Address:</strong> Chennai, Tamilnadu, India</p>
          </div>
          <div className="map-container">
            {/* Replace the src below with your Google Maps embed link */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
