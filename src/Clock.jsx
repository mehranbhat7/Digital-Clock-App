import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, settime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      settime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  function run() {
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${min}:${sec} ${ampm}`;
  }
  return <div className="clock">{run()}</div>;
};

export default Clock;
