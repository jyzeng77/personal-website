import { useState } from "react";
import type { Project } from "./content/site";
import { ProjectDialog } from "./components/ProjectDialog";
import Foundation from "./layouts/Foundation";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Foundation onSelect={setSelectedProject} />
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
