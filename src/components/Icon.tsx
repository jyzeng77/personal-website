type IconName =
  | "arrow"
  | "folder"
  | "code"
  | "mail"
  | "music"
  | "star"
  | "close"
  | "sun"
  | "file"
  | "plus"
  | "external";

const paths: Record<IconName, string> = {
  arrow: "M4 12h16M14 6l6 6-6 6",
  folder: "M3 7V5a1 1 0 0 1 1-1h5l3 3h8a1 1 0 0 1 1 1v11H3V7Z",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  music:
    "M9 18V5l11-2v13M9 9l11-2M9 18c0 3-6 4-6 1s6-4 6-1Zm11-2c0 3-6 4-6 1s6-4 6-1Z",
  star: "m12 2 2.7 6.6 7.1.6-5.4 4.6 1.6 7-6-3.8L6 21l1.6-7.2L2.2 9.2l7.1-.6L12 2Z",
  close: "m6 6 12 12M6 18 18 6",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2",
  file: "M5 2h9l5 5v15H5V2Zm9 0v6h5M9 12h6m-6 4h6",
  plus: "M12 4v16M4 12h16",
  external: "M13 3h8v8m0-8L10 14M9 4H4v16h16v-5",
};

export function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
