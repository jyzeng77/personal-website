import { useState } from "react";
import type { Project } from "./content/site";
import { ProjectDialog } from "./components/ProjectDialog";
import PersonalArchive from "./layouts/PersonalArchive";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PersonalArchive onSelect={setSelectedProject} />
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
