import React, { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css'; // Import the CSS file

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt = "Before", afterAlt = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const { left, width } = container.getBoundingClientRect();
    let position = ((clientX - left) / width) * 100;

    position = Math.max(1, Math.min(99, position));
    setSliderPosition(position);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="before-after-slider-container"
      style={{ touchAction: isDragging ? 'none' : 'auto' }}
    >
      {/* After Image - Full width in background */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="after-image"
      />

      {/* Before Image - In foreground with clip path */}
      <div
        className="before-image-wrapper"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="before-image"
        />
      </div>

      {/* Slider Line */}
      <div
        className="slider-line"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Circle Handle */}
        <div className="slider-handle">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path d="M7 1L1 6L7 11" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Reference Circle */}
        <div
          className="reference-circle"
          style={{
            left: sliderPosition > 50 ? '15%' : '85%',
          }}
        >
          {sliderPosition > 50 ? 'Before' : 'After'}
        </div>


    </div>
  );
};

export default BeforeAfterSlider;
