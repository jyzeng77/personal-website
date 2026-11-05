import { useState } from "react";
import { photos, projects, site } from "../content/site";
import type { Project } from "../content/site";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ProjectCard } from "../components/ProjectCard";
import { PhotoCard } from "../components/PhotoCard";
import { MusicShelf } from "../components/MusicShelf";
import { AboutSection } from "../components/AboutSection";
import { ActionLink } from "../components/Action";
import { Icon } from "../components/Icon";
import styles from "./PersonalArchive.module.css";

export default function PersonalArchive({
  onSelect,
}: {
  onSelect: (project: Project) => void;
}) {
  const [featured, setFeatured] = useState(projects[0]);

  return (
    <div className={styles.canvas}>
      <div className={styles.paper} id="home">
        <div className={styles.skyMargin} aria-hidden="true">
          <img src={photos.sky.src} alt="" width="1500" height="844" />
          <span>there's a whole world in the little things.</span>
        </div>
        <div className={styles.page}>
          <SiteHeader archive />
          <main id="main">
            <section className={styles.hero} aria-labelledby="intro-title">
              <div className={styles.intro}>
                <p className="eyebrow">
                  a small, ever-growing corner of the internet
                </p>
                <h1 id="intro-title">
                  hi, I'm <span>jerry.</span>
                </h1>
                <p>{site.introduction}</p>
                <div className={styles.actions}>
                  <ActionLink href="#work">
                    Have a look around <Icon name="arrow" size={17} />
                  </ActionLink>
                  <a href={site.resume}>résumé ↗</a>
                </div>
                <p className={styles.marginNote}>
                  <span aria-hidden="true">↳</span> work, interests, and the
                  discoveries in between.
                </p>
              </div>
              <div className={styles.photoCorner}>
                <PhotoCard photo={photos.city} className={styles.city} />
                <span className={styles.star} aria-hidden="true">
                  ✳
                </span>
                <span className={styles.photoNote} aria-hidden="true">
                  a different point of view ↗
                </span>
              </div>
            </section>
            <div className={styles.desk}>
              <section
                className={styles.workFolder}
                id="work"
                aria-labelledby="work-title"
              >
                <div className={styles.folderTab}>
                  <Icon name="folder" size={18} />
                  <h2 id="work-title">work /</h2>
                  <span>03 things</span>
                </div>
                <div className={styles.folderBody}>
                  <div className={styles.folderTopline}>
                    <span className="eyebrow">selected projects</span>
                    <span className={styles.indexNumber}>
                      0{projects.indexOf(featured) + 1} / 03
                    </span>
                  </div>
                  <div
                    className={styles.folderTabs}
                    role="group"
                    aria-label="Choose a featured project"
                  >
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        aria-pressed={project.id === featured.id}
                        onClick={() => setFeatured(project)}
                      >
                        {project.id === "accessibility"
                          ? "Accessibility"
                          : project.id === "carbon"
                            ? "Carbon calculator"
                            : project.title}
                      </button>
                    ))}
                  </div>
                  <ProjectCard project={featured} onSelect={onSelect} />
                  <div className={styles.folderFoot}>
                    <span>open a project. follow a thought.</span>
                    <Icon name="arrow" size={16} />
                  </div>
                </div>
              </section>
              <aside
                className={styles.elsewhereColumn}
                aria-label="Personal collections"
              >
                <div className={styles.elsewhere}>
                  <div className={styles.tape} aria-hidden="true" />
                  <p className="eyebrow">there's more to a person</p>
                  <h2>elsewhere /</h2>
                  <p className={styles.elsewhereIntro}>
                    A few things outside the project folders.
                  </p>
                  <a href="#little-things">
                    <Icon name="music" size={17} />
                    <span>
                      music<small>a few favourites</small>
                    </span>
                    <Icon name="arrow" size={15} />
                  </a>
                  <a href={photos.city.href} target="_blank" rel="noreferrer">
                    <Icon name="sun" size={17} />
                    <span>
                      photography<small>a little atmosphere</small>
                    </span>
                    <Icon name="external" size={14} />
                  </a>
                  <a
                    href="https://en.wikipedia.org/wiki/Special:Random"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="star" size={17} />
                    <span>
                      rabbit holes<small>see where you land</small>
                    </span>
                    <Icon name="external" size={14} />
                  </a>
                  <a href="#about">
                    <Icon name="file" size={17} />
                    <span>
                      about me<small>the person behind the tabs</small>
                    </span>
                    <Icon name="arrow" size={15} />
                  </a>
                </div>
                <section
                  id="little-things"
                  className={styles.music}
                  aria-label="A few music favourites"
                >
                  <MusicShelf />
                </section>
                <div className={styles.skyScrap}>
                  <img
                    src={photos.sky.src}
                    alt={photos.sky.alt}
                    width="1500"
                    height="844"
                    loading="lazy"
                  />
                  <span>leave a little space for curiosity.</span>
                  <a href={photos.sky.href} target="_blank" rel="noreferrer">
                    photo: {photos.sky.credit} ↗
                  </a>
                </div>
              </aside>
            </div>
            <section className={styles.workShelf} aria-labelledby="shelf-title">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">the work, at a glance</p>
                  <h2 className="section-title" id="shelf-title">
                    Made, learned, explored.
                  </h2>
                </div>
                <a href={site.github} target="_blank" rel="noreferrer">
                  all the code ↗
                </a>
              </div>
              <div className={styles.projectGrid}>
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
          </main>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
