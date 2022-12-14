import React from "react";
import reactlogo from "../assets/react.svg"
import redux from "../assets/redux.svg"
import mui from "../assets/material.svg"
import js from "../assets/js.svg"
import java from "../assets/java.svg"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import sass from "../assets/sass.svg"
import git from "../assets/git.svg"
import github from "../assets/github.svg"


export const skills = [
  {
    id: 1,
    name: "React",
    logo: `${reactlogo}`,
  },
  {
    id: 2,
    name: "Redux",
    logo: `${redux}`,
  },
  {
    id: 3,
    name: "MUI",
    logo: `${mui}`,
  },
  {
    id: 4,
    name: "Javascript",
    logo: `${js}`,
  },
  {
    id: 5,
    name: "Java",
    logo: `${java}`,
  },
  {
    id: 6,
    name: "HTML",
    logo: `${html}`,
  },
  {
    id: 7,
    name: "CSS",
    logo: `${css}`,
  },
  {
    id: 8,
    name: "Sass",
    logo: `${sass}`,
  },
  {
    id: 9,
    name: "Git",
    logo: `${git}`,
  },
  {
    id: 10,
    name: "GitHub",
    logo: `${github}`,
  },
];

export const projectsData = [
  {
    id: 1,
    name: "PortFolio",
    desc: "My own portfolio website.",
    tech: "React  Styled Components  React Router  Framer Motion",
    featured: true,
    type: ["react", "styled components"],
    livelink: "https://wolfee.netlify.app/",
    codelink: "https://github.com/im-shubhamsharma/portfolio-website-1.0",
  },
  {
    id: 2,
    name: "Javascript30",
    desc: "A React App for JS30 projects by Wes Bos.",
    tech: "React  Javascript  Styled Components  CSS",
    featured: true,
    type: ["react", "styled components", "javascript"],
    livelink: "https://wolfee-javascript30.netlify.app/",
    codelink: "https://github.com/im-shubhamsharma/javascript-30",
  },
  {
    id: 3,
    name: "Quizzical",
    type: ["react"],
    tech: "React  Javascript  CSS",
    desc: "Quiz WebApp that access trivia questions from the Open Trivia Database API and score players based on their answers.",
    featured: true,
    livelink: "https://im-shubhamsharma.github.io/quizzical-react-app/",
    codelink: "https://github.com/im-shubhamsharma/quizzical-react-app",
  },
  {
    id: 4,
    name: "Tenzies Game",
    desc: "Tenzies is a dice game used to demonstrate the use of React Hooks (useState, useEffect).",
    tech: "React  Javascript  CSS",
    featured: true,
    type: ["react"],
    livelink: "https://im-shubhamsharma.github.io/tenzies-game-react/",
    codelink: "https://github.com/im-shubhamsharma/tenzies-game-react",
  },
  {
    id: 5,
    name: "Pizza Point",
    desc: "A cool animated mini website made with Framer Motion in React.",
    tech: "React  Framer Motion",
    type: ["react"],
    featured: true,
    livelink: "https://pizzza-joint.netlify.app/",
    codelink: "https://github.com/im-shubhamsharma/pizza-point",
  },
  {
    id: 6,
    name: "Contact Manager",
    desc: "A react application where we can store and manage contacts.",
    tech: "React  Javascript  Sass",
    type: ["react"],
    featured: false,
    livelink: "https://im-shubhamsharma.github.io/contact-manager-react-app/",
    codelink: "https://github.com/im-shubhamsharma/contact-manager-react-app",
  },
  {
    id: 7,
    name: "Pic Some",
    desc: "Pic some is a react app which mimic a ecommerce website where you can purchase pictures/images.",
    tech: "React  Javascript  CSS",
    type: ["react"],
    livelink: "https://im-shubhamsharma.github.io/pic-some/",
    codelink: "https://github.com/im-shubhamsharma/pic-some",
  },
  {
    id: 8,
    name: "Meme Generator",
    desc: "Dynamic web page using react ",
    tech: "React  CSS",
    type: ["react"],
    livelink: "https://im-shubhamsharma.github.io/meme-generator/",
    codelink: "https://github.com/im-shubhamsharma/meme-generator",
  },
  {
    id: 9,
    name: "Notes App",
    desc: "A simple note-taking application using HTML, CSS & JS",
    tech: "JavaScript  HTML  CSS",
    type: ["javascript"],
    featured: true,
    livelink: "https://im-shubhamsharma.github.io/Notes-Website-1/",
    codelink: "https://github.com/im-shubhamsharma/Notes-Website-1",
  },
  {
    id: 10,
    name: "University Website",
    desc: "University Website using HTML & CSS",
    tech: "HTML  CSS",
    type: ["html", "css"],
    livelink: "https://im-shubhamsharma.github.io/University-website/",
    codelink: "https://github.com/im-shubhamsharma/University-website",
  },
  {
    id: 11,
    name: "Ecommerce Website",
    desc: "Ecommerce Website using HTML & CSS",
    tech: "HTML  CSS",
    type: ["html", "css"],
    livelink: "https://im-shubhamsharma.github.io/Ecommerce-Website/",
    codelink: "https://github.com/im-shubhamsharma/Ecommerce-Website",
  },
  {
    id: 12,
    name: "Good Vibes Form",
    desc: "Simple html css form template",
    tech: "HTML  CSS",
    type: ["html", "css"],
    livelink: "https://im-shubhamsharma.github.io/good-vibes-form/",
    codelink: "https://github.com/im-shubhamsharma/good-vibes-form",
  },
  {
    id: 13,
    name: "Landing Page",
    desc: " Landing page using HTML & CSS",
    tech: "HTML  CSS",
    type: ["html", "css"],
    livelink: "https://im-shubhamsharma.github.io/Landing-Page-1/",
    codelink: "https://github.com/im-shubhamsharma/Landing-Page-1",
  },
];

export const navItems = [
  {
    id: "01",
    to: "home",
    name: "Home",
  },
  {
    id: "02",
    to: "about",
    name: "About",
  },
  {
    id: "03",
    to: "projects",
    name: "Projects",
  },
  {
    id: "04",
    to: "contact",
    name: "Contact",
  },
];

export const projectsFilters = [
  {
    id:"001",
    name: "Featured",
    value: "featured",
    focus: true,
  },
  {
    id:"002",
    name: "REACT",
    value: "react",
    focus: false,
  },
  {
    id:"003",
    name: "MATERIAL UI",
    value: "material",
    focus: false,
  },
  {
    id:"004",
    name: "JAVASCRIPT",
    value: "javascript",
    focus: false,
  },
  {
    id:"005",
    name: "HTML + CSS",
    value: "html",
    focus: false,
  },
]
