import { useState, useRef } from "react";
import ResultModal from "./ResultModals";

export default function TimeChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaning] = useState(targetTime * 1000);

  const dialog = useRef();
  const timer = useRef();
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaning(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaning((prevTime) => prevTime - 10);
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="Lost" onClose={handleReset} timeRemaining={timeRemaining} />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          Timmer is {isTimerActive ? "Running" : "inactive"}
        </p>
      </section>
    </>
  );
}
