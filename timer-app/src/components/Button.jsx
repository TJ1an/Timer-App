import React from "react";
import "../App.css";

const Buttons = ({ onStop, onSelectActivity }) => {
  const handleButtonClick = (event) => {
    const activity = event.target.value; // Get button value
    onSelectActivity(activity); // Pass to parent
  };

  return (
    <div className="buttons-container">
      <button id="stop-button" onClick={onStop}>Stop</button>
      <button value="Study" onClick={handleButtonClick}>Study</button>
      <button value="Gaming" onClick={handleButtonClick}>Gaming</button>
      <button value="Eating" onClick={handleButtonClick}>Eating</button>
      <button value="Resting" onClick={handleButtonClick}>Resting</button>
      <button id="graph-button">GraphButton</button>
    </div>
  );
};

export default Buttons;
