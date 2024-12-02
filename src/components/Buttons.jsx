import React from "react";
import "../App.css";

const Buttons = ({ onStop, onStart, onReset, onSelectActivity }) => {
  const handleButtonClick = (event) => {
    const activity = event.target.value; 
    onSelectActivity(activity); 
  };

  return (
    <>
    <div className="activity-buttons-container">
      <button value="Javascript" onClick={handleButtonClick}>Javascript</button>
      <button value="Java" onClick={handleButtonClick}>Java</button>
      <button value="C++" onClick={handleButtonClick}>C++</button>
      <button value="Python" onClick={handleButtonClick}>Python</button>
      <button value="Go" onClick={handleButtonClick}>Go</button>
    </div>
    <div className = "action-buttons-container">
      <button id="stop-button" onClick={onStop}>Stop</button>
      <button id="start-button" onClick = {onStart}>Start</button>
      <button id="reset-button" onClick = {onReset}>Reset</button>
      <button>Graph</button>
    </div>
    </>
  );
};

export default Buttons;
