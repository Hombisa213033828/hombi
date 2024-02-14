import React, { useState } from 'react';
import './ButtonWithPopup.css'; // Create a CSS file for styling if needed

export default function ButtonWithPopup() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>

      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup-card">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <h2>Popup Title</h2>
            <p>This is the content of your popup.</p>
          </div>
        </div>
      )}
    </div>
  );
}
