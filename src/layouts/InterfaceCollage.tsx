import { photos, projects, site } from "../content/site";
import type { Project } from "../content/site";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Panel } from "../components/Panel";
import { ProjectCard } from "../components/ProjectCard";
import { PhotoCard } from "../components/PhotoCard";
import { MusicShelf } from "../components/MusicShelf";
import { AboutSection } from "../components/AboutSection";
import { ActionLink } from "../components/Action";
import { Icon } from "../components/Icon";
import styles from "./InterfaceCollage.module.css";

export default function InterfaceCollage({
  onSelect,
}: {
  onSelect: (project: Project) => void;
}) {
  return (
    <div className={styles.canvas}>
      <div className={styles.page} id="home">
        <SiteHeader />
        <main id="main">
          <section className={styles.hero} aria-labelledby="intro-title">
            <div className={styles.intro}>
              <p className="eyebrow">
                <span className={styles.smallStar} aria-hidden="true">
                  ✳
                </span>{" "}
                a little space on the internet
              </p>
              <h1 id="intro-title">
                hi, I'm
                <br />
                <span>jerry.</span>
                <svg
                  className={styles.scribble}
                  viewBox="0 0 130 105"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 94C30 38 60 34 92 34M77 19l19 14-18 12M55 18l4-10m10 15 10-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </h1>
              <p className={styles.description}>{site.introduction}</p>
              <div className={styles.actions}>
                <ActionLink href="#work">
                  Explore my work <Icon name="arrow" size={17} />
                </ActionLink>
                <a href={site.resume}>résumé ↗</a>
              </div>
              <div className={styles.personalFragment}>
                <PhotoCard photo={photos.city} className={styles.city} />
                <div className={styles.sideNote}>
                  <span aria-hidden="true">↙</span>
                  <p>
                    a little atmosphere,
                    <br />a different perspective.
                  </p>
                  <span className={styles.handLine} aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className={styles.desk}>
              <div className={styles.sky}>
                <img
                  src={photos.sky.src}
                  alt={photos.sky.alt}
                  width="1500"
                  height="844"
                  fetchPriority="high"
                />
                <span className={styles.skyCaption}>
                  a small window to somewhere
                </span>
              </div>
              <Panel title="index" className={styles.index}>
                <a href="#work">
                  <Icon name="folder" size={17} />
                  <span>selected work</span>
                  <span>03</span>
                </a>
                <a href="#about">
                  <Icon name="file" size={17} />
                  <span>a little about me</span>
                </a>
                <a href="#little-things">
                  <Icon name="star" size={17} />
                  <span>little things</span>
                </a>
              </Panel>
              <Panel title="featured project / 01" className={styles.featured}>
                <ProjectCard project={projects[0]} onSelect={onSelect} />
              </Panel>
              <div className={styles.deskCaption}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>built with curiosity. kept a little personal.</span>
              </div>
              <span className={styles.floatingStar} aria-hidden="true">
                ✳
              </span>
            </div>
          </section>
          <section
            className={styles.work}
            id="work"
            aria-labelledby="work-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">01—03 / selected work</p>
                <h2 id="work-title" className="section-title">
                  A few things I've been building.
                </h2>
              </div>
              <a href={site.github} target="_blank" rel="noreferrer">
                all the code ↗
              </a>
            </div>
            <div className={styles.workGrid}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={onSelect}
                  compact
                />
              ))}
            </div>
          </section>
          <AboutSection />
          <section
            className={styles.little}
            id="little-things"
            aria-labelledby="little-title"
          >
            <div className={styles.littleIntro}>
              <p className="eyebrow">there's more to a person</p>
              <h2 id="little-title" className="section-title">
                Beyond the
                <br />
                project folders.
              </h2>
              <p>
                A few interests, open tabs, and things worth getting a little
                lost in.
              </p>
            </div>
            <div className={styles.collections}>
              <MusicShelf />
              <Panel title="a few rabbit holes" className={styles.bookmarks}>
                <a
                  href="https://en.wikipedia.org/wiki/Special:Random"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>01</span>a random Wikipedia page
                  <Icon name="arrow" size={16} />
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/Interaction_design"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>02</span>why interfaces feel the way they do
                  <Icon name="arrow" size={16} />
                </a>
              </Panel>
            </div>
            <PhotoCard photo={photos.sky} className={styles.skyPhoto} />
          </section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
