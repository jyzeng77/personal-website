import type { Photo } from "../content/site";
import styles from "./PhotoCard.module.css";

export function PhotoCard({
  photo,
  className = "",
  tape = true,
}: {
  photo: Photo;
  className?: string;
  tape?: boolean;
}) {
  return (
    <figure
      className={`${styles.photo} ${tape ? styles.tape : ""} ${className}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        width="700"
        height="800"
        loading="lazy"
      />
      <figcaption>
        <span>{photo.caption}</span>
        <a href={photo.href} target="_blank" rel="noreferrer">
          photo: {photo.credit} ↗
        </a>
      </figcaption>
    </figure>
  );
}
