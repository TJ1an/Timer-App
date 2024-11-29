import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { Buttons } from "./index";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setActivity(null);
  };

 const handleActivityChange = (activity) => {
  console.log("Selected Activity:", activity);
  handleReset(); 
  setActivity(activity);
  setIsRunning(true);
};
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
  return (
    <>
     <div className="timer-container">
      <div className="text">
        <p>Activity: {activity}</p>
        <p>{formatTime(seconds)}</p>
      </div>
    </div>
    <Buttons
        onStop={handleStop}
        onSelectActivity={handleActivityChange}
      />
    </>
  );
};

export default Timer;
