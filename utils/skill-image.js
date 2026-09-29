import aws from "../app/assets/svg/skills/aws.svg";
import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import css from "../app/assets/svg/skills/css.svg";
import django from "../app/assets/svg/skills/django.svg";
import docker from "../app/assets/svg/skills/docker.svg";
import figma from "../app/assets/svg/skills/figma.svg";
import git from "../app/assets/svg/skills/git.svg";
import html from "../app/assets/svg/skills/html.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import materialui from "../app/assets/svg/skills/materialui.svg";
import mongoDB from "../app/assets/svg/skills/mongoDB.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import postgresql from "../app/assets/svg/skills/postgresql.svg";
import python from "../app/assets/svg/skills/python.svg";
import react from "../app/assets/svg/skills/react.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import vitejs from "../app/assets/svg/skills/vitejs.svg";
import kubernetes from "../app/assets/svg/skills/kubernetes.svg";
import linux from "../app/assets/svg/skills/linux.svg";
import fastapi from "../app/assets/svg/skills/fastapi.svg";
import nodejs from "../app/assets/svg/skills/nodejs.png";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "node js":
      return nodejs;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "python":
      return python;
    case "aws":
      return aws;
    case "django":
      return django;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "figma":
      return figma;
    case "kubernetes":
      return kubernetes;
    case "linux":
      return linux;
    case "fastapi":
      return fastapi;
    default:
      break;
  }
};
