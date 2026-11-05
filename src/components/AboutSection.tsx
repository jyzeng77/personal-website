import { ActionLink } from "./Action";
import { Icon } from "./Icon";
import { site } from "../content/site";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div>
        <p className="eyebrow">a little about me</p>
        <h2 id="about-title">
          A person behind
          <br />
          the open tabs.
        </h2>
      </div>
      <div>
        <p>
          I'm Jerry. I like making things, figuring out how they work, and
          following an interesting idea a little further than I meant to.
        </p>
        <p>
          This is a home for my work and a few of the things I enjoy along the
          way. Software, data, thoughtful interfaces—and the little discoveries
          in between.
        </p>
        <div className={styles.links}>
          <ActionLink href={site.resume}>
            My résumé <Icon name="file" size={16} />
          </ActionLink>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
