import { site } from "../content/site";
import { Icon } from "./Icon";
import styles from "./SiteHeader.module.css";

export function SiteHeader({ archive = false }: { archive?: boolean }) {
  return (
    <header className={styles.header}>
      <a
        className={`${styles.wordmark} ${archive ? styles.paper : ""}`}
        href="#home"
        aria-label="Jerry — back to top"
      >
        {archive ? "jerry / index" : "jerry."}
        <span aria-hidden="true">✳</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">work</a>
        <a href="#about">about</a>
        <a href="#little-things">{archive ? "elsewhere" : "little things"}</a>
      </nav>
      <a className={styles.contact} href={`mailto:${site.email}`}>
        say hello <Icon name="arrow" size={15} />
      </a>
    </header>
  );
}
