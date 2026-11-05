import { projects, site } from "../content/site";
import type { Project } from "../content/site";
import { SiteHeader } from "../components/SiteHeader";
import { ProjectCard } from "../components/ProjectCard";
import { AboutSection } from "../components/AboutSection";
import { MusicShelf } from "../components/MusicShelf";
import { SiteFooter } from "../components/SiteFooter";
import styles from "./Foundation.module.css";

export default function Foundation({
  onSelect,
}: {
  onSelect: (project: Project) => void;
}) {
  return (
    <div className={styles.page} id="home">
      <SiteHeader />
      <main id="main">
        <section className={styles.intro}>
          <p className="eyebrow">a little space on the internet</p>
          <h1>hi, I'm jerry.</h1>
          <p>{site.introduction}</p>
        </section>
        <section id="work">
          <h2 className="section-title">A few things I've been building.</h2>
          <div className={styles.projects}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelect}
              />
            ))}
          </div>
        </section>
        <AboutSection />
        <section id="little-things" className={styles.little}>
          <h2 className="section-title">A few little things.</h2>
          <MusicShelf />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
