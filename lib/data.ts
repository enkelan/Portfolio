import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import HellDivers2 from "@/public/HellDivers2.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BeCode - Full Stack Developer",
    location: "Liège, Belgium",
    description:
      "Engaged in comprehensive full-stack development training." +
      "Successfully completed numerous collaborative and individual projects using " +
      "HTML, CSS, JavaScript, React, Next.js, Vite, MySQL, Git, and many more",
    icon: React.createElement(LuGraduationCap),
    date: "February 2024 - September 2024",
  },
  {
    title: "BeCode - Digital Sprint",
    location: "Liège, Belgium",
    description:
      "Learned the basics of web development, including HTML, CSS, and JavaScript." +
      "I also learned how to use Git and GitHub. We were a team of three to create a " +
      "website including design of the web, every thing from scratch including brainstorming.",

    icon: React.createElement(LuGraduationCap),
    date: "January 2024 - February 2024",
  },
  {
    title:
      "Ecole d Hôtellerie et de Tourisme de la\n" +
      "Ville de Liège (Highschool)\n",
    location: "Liège, Belgium",
    description:
      "I'm now a full-stack developer working as a freelancer. " +
      "My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. " +
      "I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2014 - June 2023",
  },
] as const;

export const projectsData = [
  {
    title: "HellDivers Forge",
    description:
      "A web app for the game Helldivers. It has features like user authentication, Reddit-like posts, and library of their weapons and armour with description, ",
    tags: ["React", "Next.js", "MySql", "Tailwind", "Prisma"],
    imageUrl: HellDivers2,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Sass",
  "Php",
  "React.js",
  "Next.js",
  "Vite",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
] as const;
