import React, { useState } from 'react';
import './Why.css';
import {
  FaStore,
  FaPaintBrush,
  FaDollarSign,
  FaChartLine,
  FaTags,
  FaLayerGroup,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaStore />,
    title: 'Marketplace Compatibility',
    text: 'We specialize in optimizing images for top e-commerce platforms like Amazon, Etsy, eBay, and more—helping your products meet marketplace standards and stand out from the competition.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Creative Excellence',
    text: 'Our professional editors add a cutting-edge, brand-focused touch to every image. From clean product shots to artistic edits, we align visuals with your unique brand identity.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Cost-Effective Outsourcing',
    text: 'Why hire a full in-house team? With us, you can save over 50% on image processing costs—without ever compromising on quality or turnaround time.',
  },
  {
    icon: <FaChartLine />,
    title: 'Sales Growth Guarantee',
    text: 'We don’t just edit—we elevate. Our proven image enhancement techniques are designed to boost visual appeal and increase retail conversions by up to 50%.',
  },
  {
    icon: <FaTags />,
    title: 'Flexible & Affordable Pricing',
    text: 'Get premium image editing starting at just $0.10 per image. Whether you’re processing one image or thousands, we offer scalable solutions to fit any budget.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Scalable Solutions',
    text: 'Whether you’re a solo seller or managing a large product catalog, our services scale effortlessly with your needs—ensuring consistent quality and support at every stage of your business growth.',
  },
];

const Why = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="why-parallax">
      <div className="parallax-bg" />
      <div className="textcontent">
      <h3><span className="highlight">WHY</span> CHOOSE US</h3>


        <div className="content-block">
          {features.map((feature, index) => (
            <div
              className={`flip-card ${activeIndex === index ? 'flipped' : ''}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front">
                  <div className="icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <span className="click-me">Click to view</span>
                </div>

                {/* Back */}
                <div className="flip-card-back">
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
