
import React, { useState, useEffect } from "react";
import './Word.css'

const Word = () => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ["Elegant", "Graceful", "Beautiful", "Sophisticated", "Charming"];
    const [isFadingOut, setIsFadingOut] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsFadingOut(true); // Start the fade-out effect
  
        // After 1 second (time for fade-out), change the word
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsFadingOut(false); // Start the fade-in effect
        }, 1000); // Fade-out takes 1 second
  
      }, 4000); // Total time = 4 seconds visible + 1 second fade-out = 5 seconds
  
      // Clear the interval when the component is unmounted
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="word-container-wrapper">
      <div
        className={`word-container ${isFadingOut ? "fade-out" : "fade-in"}`}
      >
        {words[currentWordIndex]}
      </div>
    </div>
  )
}

export default Word
