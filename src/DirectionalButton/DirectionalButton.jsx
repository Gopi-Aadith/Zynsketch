import React from 'react';
import './DirectionalButton.css';

const DirectionalButton = ({ text }) => {
  return (
    <button className="directional-button">
      <span>{text}</span>
    </button>
  );
};

export default DirectionalButton;
