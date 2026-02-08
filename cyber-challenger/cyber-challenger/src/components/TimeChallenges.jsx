import { useState } from "react";

export default function TimeChallenge({ title, targetTime }) {
  const [isTimerStarted, setisTimerStarted] = useState(false);
  const [isTimerFinished, setisTimerFinished] = useState(false);

  function handleStart() {
    setisTimerStarted(true);
    setTimeout(() => {
      setisTimerFinished(true);
      setisTimerStarted(false)
    }, targetTime * 1000);
  }
  function handleStop() {
    setisTimerStarted(false);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {isTimerFinished && <p>you Lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={isTimerStarted ? handleStop : handleStart}>
          {isTimerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={isTimerStarted ? "active" :undefined}>Timmer is {isTimerStarted ? "Running" : "inactive"}</p>
    </section>
  );
}
