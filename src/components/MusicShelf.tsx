import { useState } from "react";
import { Icon } from "./Icon";
import styles from "./MusicShelf.module.css";

export function MusicShelf() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.shelf}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={expanded ? "music-shelf" : undefined}
      >
        <span className={styles.cover} aria-hidden="true">
          <Icon name="music" size={23} />
        </span>
        <span className={styles.label}>
          <span className="eyebrow">a few favourites</span>
          <strong>a little music shelf</strong>
          <span>m-flo, LOONA, Red Velvet</span>
        </span>
        <Icon name={expanded ? "close" : "plus"} size={17} />
      </button>
      {expanded && (
        <div id="music-shelf" className={styles.artists}>
          {["m-flo", "LOONA", "Red Velvet"].map((artist) => (
            <a
              key={artist}
              href={`https://open.spotify.com/search/${encodeURIComponent(artist)}`}
              target="_blank"
              rel="noreferrer"
            >
              {artist}
              <Icon name="external" size={13} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
