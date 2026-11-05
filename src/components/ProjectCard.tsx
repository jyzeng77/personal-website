import type { Project } from "../content/site";
import { Icon } from "./Icon";
import { ProjectArtwork } from "./ProjectArtwork";
import styles from "./ProjectCard.module.css";

export function ProjectCard({
  project,
  onSelect,
  compact = false,
}: {
  project: Project;
  onSelect: (project: Project) => void;
  compact?: boolean;
}) {
  return (
    <button
      className={`${styles.card} ${compact ? styles.compact : ""}`}
      onClick={() => onSelect(project)}
      aria-haspopup="dialog"
    >
      <ProjectArtwork kind={project.artwork} />
      <span className={styles.body}>
        <span className={styles.heading}>
          <span>{project.title}</span>
          <Icon name="arrow" size={19} />
        </span>
        <span className={styles.description}>{project.description}</span>
        <span className={styles.tags}>
          {project.tags.slice(0, 2).join(" / ")}
        </span>
      </span>
    </button>
  );
}
