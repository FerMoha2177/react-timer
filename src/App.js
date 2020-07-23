import React, { useState } from 'react';
import DisplayComponent    from './Components/DisplayComponent';
import BtnComponent        from './Components/BtnComponent';
import InputComponent        from './Components/InputComponent';
import ReactDOM from "react-dom";
import './App.css';

function App() {
  const [time, setTime] = useState({  ms:0, s:0, m:0, h:0 });

  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();

  

  var updateSec = time.s, updateMin = time.m;

  const run = () => {

    if(updateSec === 60){
      updateMin++
      updateSec = 0;
    }
    updateSec++;
    return setTime({m:updateMin, s:updateSec})
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="timer">
          <DisplayComponent time={time}/>
          <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
        </div>
      </div>

    </div>
  );
}

export default App;