import React, { useEffect, useState } from "react";
import { getFormattedTime } from "./digitalClock.helper";

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{getFormattedTime(currentTime)}</div>;
}

export default DigitalClock;

/*
currentTime.toLocaleTimeString() -> Costly operation
*/
