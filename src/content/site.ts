export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  detail: string;
  tags: string[];
  href: string;
  demo?: string;
  artwork: "race" | "accessibility" | "carbon";
};

export const site = {
  name: "Jerry Zeng",
  introduction:
    "I build things, explore ideas, and get curious about the little things.",
  email: "j75zeng@uwaterloo.ca",
  github: "https://github.com/jyzeng77",
  linkedin: "https://www.linkedin.com/in/jerryzeng77/",
  resume: "./JerryZeng_resume_technical.pdf",
};

// Summaries are grounded in these public project READMEs. See docs/design/content.md.
// Personal contributions and outcomes still need Jerry's own case-study notes.
export const projects: Project[] = [
  {
    id: "fin1",
    title: "Fin1",
    category: "A little learning, a little racing",
    description: "Turning financial literacy into a race worth taking.",
    detail:
      "A team project that explores financial education through racing, decisions, and progression. Financial scenarios become a way to practise making choices, rather than just reading about them.",
    tags: ["Team project", "Financial literacy", "Interactive web"],
    href: "https://github.com/jyzeng77/ignitionhacks2026-2",
    artwork: "race",
  },
  {
    id: "accessibility",
    title: "Local Accessibility Checker",
    category: "Making the web a little more usable",
    description: "A local tool for finding accessibility issues in HTML pages.",
    detail:
      "Runs axe-core checks in headless Chrome against HTML files or a local website. Reports distinguish high-confidence findings from issues that need a person to review them.",
    tags: ["JavaScript", "axe-core", "Developer tools"],
    href: "https://github.com/jyzeng77/accessibility-checker",
    artwork: "accessibility",
  },
  {
    id: "carbon",
    title: "Carbon Footprint Calculator",
    category: "Small choices, a bigger picture",
    description: "Making a carbon estimate feel a little more tangible.",
    detail:
      "A step-by-step questionnaire that estimates monthly carbon emissions and translates the result into a tree equivalent. Originally built for a sustainability project in the Believe Leadership Program.",
    tags: ["JavaScript", "HTML & CSS", "Material Design"],
    href: "https://github.com/jyzeng77/Carbon-Footprint-Calculator",
    demo: "https://carbon-footprint-calculator-hazel-eight.vercel.app/",
    artwork: "carbon",
  },
];

export const photos = {
  sky: {
    src: "./images/blue-sky.jpg",
    alt: "Soft white clouds drifting across a pale blue sky",
    caption: "a little room to breathe",
    credit: "Bonnie Kitahata",
    href: "https://unsplash.com/photos/blue-sky-and-white-clouds-9aHj3ZAETNA",
  },
  city: {
    src: "./images/city-at-dusk.jpg",
    alt: "New York buildings catching the last warm light of the day",
    caption: "somewhere between day & night",
    credit: "Matteo Catanese",
    href: "https://unsplash.com/photos/city-buildings-under-sunset-ZVolF5GVmlw",
  },
};

export type Photo = (typeof photos)[keyof typeof photos];
