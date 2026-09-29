import {
  SiAntdesign,
  SiCypress,
  SiExpress,
  SiJest,
  SiRedux,
  SiSass,
  SiTestinglibrary,
  SiWebpack,
} from "react-icons/si";
import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import css from "../app/assets/svg/skills/css.svg";
import figma from "../app/assets/svg/skills/figma.svg";
import git from "../app/assets/svg/skills/git.svg";
import html from "../app/assets/svg/skills/html.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import materialui from "../app/assets/svg/skills/materialui.svg";
import mongoDB from "../app/assets/svg/skills/mongoDB.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import nodejs from "../app/assets/svg/skills/nodejs.png";
import postgresql from "../app/assets/svg/skills/postgresql.svg";
import react from "../app/assets/svg/skills/react.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import vitejs from "../app/assets/svg/skills/vitejs.svg";

// Keys are the display names used in utils/data/skills.js.
const images = {
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  TypeScript: typescript,
  React: react,
  "Next.js": nextJS,
  "Node.js": nodejs,
  "Tailwind CSS": tailwind,
  "Material UI": materialui,
  Bootstrap: bootstrap,
  MongoDB: mongoDB,
  PostgreSQL: postgresql,
  Vite: vitejs,
  Git: git,
  Figma: figma,
};

// Brand icons (react-icons) for skills without an image asset.
const icons = {
  "Redux Toolkit": { Icon: SiRedux, color: "#764ABC" },
  Sass: { Icon: SiSass, color: "#CC6699" },
  "Ant Design": { Icon: SiAntdesign, color: "#1677FF" },
  Express: { Icon: SiExpress, color: "#FFFFFF" },
  Jest: { Icon: SiJest, color: "#C21325" },
  "Testing Library": { Icon: SiTestinglibrary, color: "#E33332" },
  Cypress: { Icon: SiCypress, color: "#69D3A7" },
  Webpack: { Icon: SiWebpack, color: "#8DD6F9" },
};

export const skillsImage = (skill) => images[skill];
export const skillIcon = (skill) => icons[skill];
