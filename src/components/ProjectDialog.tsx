import { useEffect, useId, useRef } from "react";
import type { Project } from "../content/site";
import { Action, ActionLink } from "./Action";
import { Icon } from "./Icon";
import { ProjectArtwork } from "./ProjectArtwork";
import styles from "./ProjectDialog.module.css";

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (project && !dialog.current?.open) dialog.current?.showModal();
    if (!project && dialog.current?.open) dialog.current.close();
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <dialog
      ref={dialog}
      className={styles.dialog}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <>
          <div className={styles.visual}>
            <ProjectArtwork kind={project.artwork} />
            <Action
              className={styles.close}
              onClick={onClose}
              aria-label="Close project"
            >
              <Icon name="close" />
            </Action>
          </div>
          <div className={styles.content}>
            <p className="eyebrow">{project.category}</p>
            <h2 id={titleId}>{project.title}</h2>
            <p>{project.detail}</p>
            <ul>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className={styles.links}>
              <ActionLink href={project.href} target="_blank" rel="noreferrer">
                Explore the code <Icon name="external" size={16} />
              </ActionLink>
              {project.demo && (
                <ActionLink
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the project <Icon name="arrow" size={16} />
                </ActionLink>
              )}
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
