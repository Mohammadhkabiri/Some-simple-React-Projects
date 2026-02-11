import Sidebar from "./components/Sidebar";
import Newproject from "./components/Newproject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
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

  function saveProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: projectState.projects.filter(
          (project) => project.id !== projectState.selectedProjectId,
        ),
      };
    });
  }

  let contentNewProjectOrNot;

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId,
  );

  contentNewProjectOrNot = (
    <SelectedProject onDelete={handleDelete} project={selectedProject} />
  );
  console.log(selectedProject);

  if (projectState.selectedProjectId === undefined) {
    contentNewProjectOrNot = (
      <NoProjectSelected onHandleAddSelectProject={handleAddSelectProject} />
    );
  } else if (projectState.selectedProjectId === null) {
    contentNewProjectOrNot = (
      <Newproject onAdd={saveProject} onCancel={handleCancelProject} />
    );
  }

  return (
    <main className="my-8 h-screen flex gap-8">
      <Sidebar
        onHandleAddSelectProject={handleAddSelectProject}
        projects={projectState.projects}
        onSelect={handleSelectProject}
      />
      {contentNewProjectOrNot}
    </main>
  );
}

export default App;
