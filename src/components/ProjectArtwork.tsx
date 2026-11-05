import type { Project } from "../content/site";
import styles from "./ProjectArtwork.module.css";

// Original decorative illustrations, not screenshots or claims about project results.
export function ProjectArtwork({ kind }: { kind: Project["artwork"] }) {
  if (kind === "race")
    return (
      <div className={`${styles.art} ${styles.race}`} aria-hidden="true">
        <div className={styles.artLabel}>
          <span>FIN1</span>
          <span>LEARN BY DOING ↗</span>
        </div>
        <svg viewBox="0 0 620 300" fill="none">
          <path
            className={styles.trackShadow}
            d="M88 208C22 103 146 55 213 104s26 136 111 133 48-184 138-171 119 146 56 172"
          />
          <path
            className={styles.track}
            d="M88 208C22 103 146 55 213 104s26 136 111 133 48-184 138-171 119 146 56 172"
          />
          <path
            className={styles.lane}
            d="M88 208C22 103 146 55 213 104s26 136 111 133 48-184 138-171 119 146 56 172"
          />
          <g transform="translate(205 113) rotate(42)">
            <rect x="-16" y="-9" width="32" height="18" rx="5" fill="#f9f5e9" />
            <rect x="-5" y="-7" width="10" height="14" rx="3" fill="#5e778a" />
          </g>
          <circle cx="89" cy="208" r="7" fill="#f7f1e5" />
          <circle cx="518" cy="238" r="7" fill="#f7f1e5" />
        </svg>
        <span className={styles.artFoot}>
          a different kind of financial journey
        </span>
      </div>
    );

  if (kind === "accessibility")
    return (
      <div
        className={`${styles.art} ${styles.accessibility}`}
        aria-hidden="true"
      >
        <div className={styles.artLabel}>
          <span>THE WEB, FOR EVERYONE.</span>
          <span>↗</span>
        </div>
        <div className={styles.accessWindow}>
          <div>
            <i />
            <i />
            <i />
          </div>
          <span className={styles.accessLetter}>
            Aa<span>✓</span>
          </span>
          <p>
            small checks.
            <br />
            better experiences.
          </p>
          <span className={styles.fakeLine} />
          <span className={styles.fakeLine} />
        </div>
      </div>
    );

  return (
    <div className={`${styles.art} ${styles.carbon}`} aria-hidden="true">
      <div className={styles.artLabel}>
        <span>A LITTLE MORE CONSCIOUS</span>
        <span>CO₂e</span>
      </div>
      <svg viewBox="0 0 500 280">
        <path
          d="M250 237V116m0 74-54-45m54 19 49-49"
          fill="none"
          stroke="#486857"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <ellipse
          cx="200"
          cy="120"
          rx="32"
          ry="62"
          transform="rotate(-42 200 120)"
          fill="#8aab8f"
        />
        <ellipse
          cx="292"
          cy="92"
          rx="31"
          ry="64"
          transform="rotate(38 292 92)"
          fill="#a4b99a"
        />
        <path d="M135 245h230" stroke="#819584" strokeWidth="1" />
        <circle cx="365" cy="64" r="29" fill="#e7d8a5" />
      </svg>
      <span className={styles.artFoot}>small choices, a bigger picture.</span>
    </div>
  );
}
