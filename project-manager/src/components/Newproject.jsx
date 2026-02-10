import Input from "./Input";
import { useRef } from "react";

export default function Newproject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const entredTitle = title.current.value;
    const entredDescription = description.current.value;
    const entredDueDate = dueDate.current.value;
    onAdd({
      title: entredTitle,
      description: entredDescription,
      dueDate: entredDueDate
    });
  }

  return (
    <div className="w-140 mt-16">
      <menu className="flex items-center justify-center gap-12 my-4">
        <li>
          <button className="text-stone-600 hover:text-stone-950">
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
  );
}
