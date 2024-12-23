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
    handleReset();
    if (!activity) return;
    setIsRunning(true);
    if (totalTimes[activity] && seconds > totalTimes[activity]) {
      const totalTimes1 = seconds - totalTimes[activity];
      setTotalTimes((prev) => ({
        ...prev,
        [activity]: totalTimes1,
      }))
    }
    else if (totalTimes[activity] && seconds <= totalTimes[activity]) {
      const totalTimes2 = totalTimes[activity] + seconds;
      setTotalTimes((prev) => ({
        ...prev,
        [activity]: totalTimes2,
      }))
    }
    else{
      setTotalTimes((prev) => ({
        ...prev,
        [activity]: (seconds || 0),
      }));
    }
  }

  const handleSave = () => {
    handleReset();
    if (!activity) return;
    setIsRunning(false);
    if (totalTimes[activity] && seconds > totalTimes[activity]) {
      const totalTimes3 = seconds - totalTimes[activity];
      setTotalTimes((prev) => ({
        ...prev,
        [activity]: totalTimes3,
      }))
    }
    else if (totalTimes[activity] && seconds <= totalTimes[activity]) {
      const totalTimes4 = totalTimes[activity] + seconds;
      setTotalTimes((prev) => ({
        ...prev,
        [activity]: totalTimes4,
      }))
    }
    else{
      setTotalTimes((prev) => ({
        ...prev,
        [activity]: (seconds || 0),
      }));
    }
  };

  const handleHardReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setActivity(null);
    localStorage.clear();
    setTotalTimes({});
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const handleActivityChange = (newActivity) => {
    handleReset();  
    setActivity(newActivity);
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
        onSave={handleSave}
        onStart={handleStart}
        onReset={handleHardReset}
        onSelectActivity={handleActivityChange}
      />
    </>
  );
};

export default Timer;