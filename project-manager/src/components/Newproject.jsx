import Input from "./Input";

export default function Newproject() {
  return (
    <div className="w-140 mt-16">
      <menu className="flex items-center justify-center gap-12 my-4">
        <li>
          <button className="text-stone-600 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md  ">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textArea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
