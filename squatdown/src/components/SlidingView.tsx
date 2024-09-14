import React, { useState } from "react";
import "../SlidingView.css";

const SlidingView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleView = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sliding-container ${isOpen ? "open" : ""}`}>
      <div className="arrow" onClick={toggleView}>
        {isOpen ? "↓" : "↑"}
      </div>
      <div className="content">
        {isOpen && (
          <div className="sliding-content">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/eRXE8Aebp7s?autoplay=1&controls=0&showinfo=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/REuKymvrrqk?autoplay=1&controls=0&showinfo=0&modestbranding=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidingView;
