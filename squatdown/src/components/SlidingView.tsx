import React, { useState } from 'react';
import '../SlidingView.css'; // Import your CSS file

const SlidingView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleView = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sliding-container ${isOpen ? 'open' : ''}`}>
      <div className="arrow" onClick={toggleView}>
        {isOpen ? '→' : '←'}
      </div>
      <div className="content">
        {isOpen && (
          <div className="sliding-content">
            <h3>Additional View</h3>
            {/* Add any additional content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidingView;