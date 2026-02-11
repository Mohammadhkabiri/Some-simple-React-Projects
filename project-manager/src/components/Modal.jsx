import { useRef, useImperativeHandle } from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "./button";

const Modal = forwardRef(function ({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-8 rounded-md shadow-md fixed top-1/6 left-1/2 -translate-x-1/2 translate-y-1/2 m-0"
    >
      {children}
      <form className="mt-4 text-right" method="dialog">
        <Button button={buttonCaption} />
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
