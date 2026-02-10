import Sidebar from "./components/Sidebar";
import Newproject from "./components/Newproject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddSelectProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let contentNewProjectOrNot;

  if (projectState.selectedProjectId === undefined) {
    contentNewProjectOrNot = (
      <NoProjectSelected onHandleAddSelectProject={handleAddSelectProject} />
    );
  } else if (projectState.selectedProjectId === null) {
    contentNewProjectOrNot = <Newproject />;
  }

  return (
    <main className="my-8 h-screen flex gap-8">
      <Sidebar onHandleAddSelectProject={handleAddSelectProject} />
      {contentNewProjectOrNot}
    </main>
  );
}

export default App;
