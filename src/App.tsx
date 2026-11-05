import { useState } from "react";
import type { Project } from "./content/site";
import { ProjectDialog } from "./components/ProjectDialog";
import InterfaceCollage from "./layouts/InterfaceCollage";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <InterfaceCollage onSelect={setSelectedProject} />
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
