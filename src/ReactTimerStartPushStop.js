import React, { useEffect, useRef, useState } from "react";

export default function ReactTimeStartPushStop() {
  const [count, setCount] = useState(0);
  // const [isActive,setIsActive] = useState(false)
  let timer;
  const handleStart = () => {
    setCount(count + 1);
    // setIsActive(true)
  };
  const handleStop = () => {
    clearTimeout(timer);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timer);
  };
  
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1500);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Let's start the counter</h1>
      <h3>{count}</h3>
      <button onClick={handleStart}>start</button>&nbsp;
      <button onClick={handleStop}>stop</button>&nbsp;
      <button onClick={handlereset}>reset</button>&nbsp;
    </div>
  );
}
