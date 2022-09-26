import React from 'react';

const Controls = ({ handleButtonClick }) => (
  <div>
    <button type="button" className="gud-button" onClick={handleButtonClick}>
      Gud
    </button>
    <button
      type="button"
      className="natural-button"
      onClick={handleButtonClick}
    >
      Gud
    </button>
    <button type="button" className="bad-button" onClick={handleButtonClick}>
      Gud
    </button>
  </div>
);

export default Controls;
