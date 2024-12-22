import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Buttons = ({ onSave, onStart, onReset, onSelectActivity }) => {
  const navigate = useNavigate();
  const handleButtonClick = (event) => {
    const activity = event.target.value; 
    onSelectActivity(activity); 
  };
  const handleGraphClick = (event) => {
    handleButtonClick(event);
    navigate('/chart');
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
      <button id="stop-button" onClick={onSave}>Save</button>
      <button id="start-button" onClick = {onStart}>Start</button>
      <button id="reset-button" onClick = {onReset}>Reset</button>
      <button onClick ={handleGraphClick}>Graph</button>
    </div>
    </>
  );
};

export default Buttons;
