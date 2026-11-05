import type { ComponentProps, PointerEvent } from "react";
import styles from "./Action.module.css";

// CSS handles the motion; JavaScript only places the ripple at the click.
function placeRipple(event: PointerEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--ripple-x",
    `${event.clientX - bounds.left}px`,
  );
  event.currentTarget.style.setProperty(
    "--ripple-y",
    `${event.clientY - bounds.top}px`,
  );
}

export function Action({
  children,
  className = "",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      onPointerDown={placeRipple}
      className={`${styles.action} ${className}`}
    >
      {children}
    </button>
  );
}

export function ActionLink({
  children,
  className = "",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      onPointerDown={placeRipple}
      className={`${styles.action} ${className}`}
    >
      {children}
    </a>
  );
}
