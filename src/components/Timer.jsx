import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { Buttons } from "./index";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activity, setActivity] = useState(null);
  const [totalTimes, setTotalTimes] = useState(() => {
    const saved = localStorage.getItem("totalTimes");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    localStorage.setItem("totalTimes", JSON.stringify(totalTimes));
  }, [totalTimes]);

  const handleStart = () => {
    if (activity === null) { 
    }
    else{
      setIsRunning(true);
    }
  }

  const handleStop = () => {
    setIsRunning(false);
    if (activity) {
      setTotalTimes((prev) => ({
        ...prev,
        [activity]: (prev[activity] || 0) + seconds,
      }));
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setActivity(null);
    localStorage.clear();
    setTotalTimes({});
  };

  const handleActivityChange = (newActivity) => {
    if (activity) {
      setTotalTimes((prev) => ({
        ...prev,
        [activity]: (prev[activity] || 0) + seconds,
      }));
    }
    setActivity(newActivity);
    setSeconds(0);
    setIsRunning(true);
  };
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <>
     <div className="timer-container">
      <div className="activity-text">
        <p>Activity: {activity}</p>
      </div>
      <div className="timer-text">
        <p>{formatTime(seconds)}</p>
      </div>
    </div>
    <Buttons
        onStop={handleStop}
        onStart={handleStart}
        onReset={handleReset}
        onSelectActivity={handleActivityChange}
      />
    </>
  );
};

export default Timer;
