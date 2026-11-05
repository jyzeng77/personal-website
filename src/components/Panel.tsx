import type { ReactNode } from "react";
import styles from "./Panel.module.css";

export function Panel({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.panel} ${className}`}>
      {title && (
        <div className={styles.titlebar}>
          <span className={styles.dots} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>{title}</span>
          <span className={styles.corner} aria-hidden="true">
            ↗
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
