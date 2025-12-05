import React, { useEffect, useRef, useState } from "react";

import "./stopwatch.css";
import { getFormattedTime } from "./stopWatch.helper";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const startRef = useRef(0);

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning && !intervalRef.current) {
      startRef.current = Date.now() - time;
      intervalRef.current = setInterval(() => {
        const ellapsedTime = Date.now() - startRef.current;
        setTime(ellapsedTime);
      }, 1000);
      setIsRunning(true);
    }
  };

  const clearTimeInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    setTime(0);
    setLaps([]);
    clearTimeInterval();
    setIsRunning(false);
  };

  const pauseTimer = () => {
    clearTimeInterval();
    setIsRunning(false);
  };

  const addLap = () => {
    setLaps((prev) => [...prev, time]);
  };

  useEffect(() => {
    return () => clearTimeInterval();
  }, []);

  return (
    <div className="container">
      <span className="timer">{getFormattedTime(time)}</span>
      <div>
        <button className="btn" onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button className="btn" onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button className="btn" onClick={resetTimer} disabled={!time}>
          Reset
        </button>
        <button className="btn" onClick={addLap} disabled={!isRunning}>
          Lap
        </button>
      </div>
      <div className="laps">
        {laps.map((lap, index) => {
          return <span key={index}>{getFormattedTime(lap)}</span>;
        })}
      </div>
    </div>
  );
}

export default StopWatch;

/*
start -> 1000
pausedTime- 1005

resumeTime - 1030 startRef - 1025

timeAt - 1035 time will be 10

*/
