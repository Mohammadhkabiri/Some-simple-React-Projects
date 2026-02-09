import Sidebar from "./components/Sidebar";
import Newproject from "./components/Newproject";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  return (
    <main className="my-8 h-screen flex gap-8">
      <Sidebar />
      <NoProjectSelected />

    </main>
  );
}

export default App;
