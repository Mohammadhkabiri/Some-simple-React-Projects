import NewTask from "./NewTask";
export default function Task() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4"></h2>
      <NewTask />
      <p className="text-stone-800 mb-4"></p>
      <ul></ul>
    </section>
  );
}
