import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function Newproject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSave() {
    const entredTitle = title.current.value;
    const entredDescription = description.current.value;
    const entredDueDate = dueDate.current.value;

    if (
      entredTitle.trim() === "" ||
      entredDescription.trim() === "" ||
      entredDueDate === ""
    ) {
      return modal.current.open();
    }

    onAdd({
      title: entredTitle,
      description: entredDescription,
      dueDate: entredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          invalid Input !!
        </h2>
        <p className="text-stone-600 mb-4">
          Oops ... look like you forgot to enter a valid value
        </p>
        <p className="text-stone-600 mb-4">
          Please Make sure that you enter a valid value for every input fields.
        </p>
      </Modal>
      <div className="w-140 mt-16">
        <menu className="flex items-center justify-center gap-12 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-600 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md  "
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
