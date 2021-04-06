import React, { useState, useEffect } from 'react';
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {

    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000)
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  }, [timerOn]);

  const setStateOfTimer = () => {
    if (timerOn) {
      setTimerOn(false);
      setTime(0);
    } else {
      setTimerOn(true);
    }
  }

  const resetOfTimer = () => {
    if (time > 0) {
      setTime(0);
      setTimerOn(true);
    }
  }

  const waitOfTimer = (e) => setTimerOn(false);

  return (
    <div className="App">
      <div className="time">
        <span>{("0" + (Math.floor(time / 3600) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 60) % 60)).slice(-2)}:</span>
        <span>{("0" + (time % 60)).slice(-2)}</span>
      </div>
      <div className="control">
        <button className={"btn btn--" + (timerOn ? "danger" : "success")} onClick={setStateOfTimer}>{timerOn ? "Stop" : "Start"}</button>
        <button className="btn btn--primary" onDoubleClick={waitOfTimer}>Wait</button>
        <button className="btn btn--danger" onClick={resetOfTimer}>Reset</button>
      </div>
    </div>
  );
};

export default App;
