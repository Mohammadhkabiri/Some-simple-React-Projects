import Sidebar from "./components/Sidebar";
import Newproject from "./components/Newproject";
function App() {
  return (
    <main className="my-8 h-screen flex gap-8">
      <Sidebar />
      <Newproject />
    </main>
  );
}

export default App;
