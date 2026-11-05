import { useState } from "react";
import { site } from "../content/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const [found, setFound] = useState(false);
  return (
    <footer className={styles.footer}>
      <div>
        <a href={`mailto:${site.email}`}>Have something in mind? Say hello ↗</a>
        <p>
          © {new Date().getFullYear()} Jerry Zeng · always a work in progress.
        </p>
      </div>
      <button
        className={styles.secret}
        onClick={() => setFound(!found)}
        aria-label={
          found ? "Hide the little discovery" : "Find a little discovery"
        }
        aria-expanded={found}
      >
        <svg
          width="40"
          height="38"
          viewBox="0 0 48 42"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m10 19 1-13 11 8h5l10-8 1 14c7 18-33 24-28-1Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M16 23h1m14 0h1m-10 5 2 2 2-2M7 26l8 1m19 0 8-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        <span>
          {found
            ? "you found a quiet little corner. stay a while."
            : "a little curiosity goes a long way."}
        </span>
      </button>
    </footer>
  );
}
