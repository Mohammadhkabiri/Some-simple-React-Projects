import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, onClose, timeRemaining },
  ref,
) {
  const userLost = timeRemaining <= 0;

  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);

  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });



  return (
    <dialog ref={dialog} className="result-modal" onClose={onClose}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The Target Time was <strong>{targetTime} seconds</strong>
      </p>
      <progress value={timeRemaining} max={targetTime * 1000} />
      <p>
        You Stopped the Timer after{" "}
        <strong>{formattedTimeRemaining} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
