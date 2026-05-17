// import mui from "../assets/mui.svg";
import react from "../assets/re.svg";
import ts from "../assets/ts.svg";
import next from "../assets/next.svg";
// import mysql from "../assets/mysql.svg";
import js from "../assets/js.svg";
import tw from "../assets/tail.svg";
// import vite from "../assets/vite.svg";
import three from "../assets/three.svg";
import scss from "../assets/scss.svg";
// import attendium from "../assets/attendium.png";
// import luminelle from "../assets/luminelle.png";
// import videocall from "../assets/videocall.webp";
// import voltfinder from "../assets/voltfinder.png";
// import firebase from "../assets/firebase.svg";
// import hostinger from "../assets/hostinger.svg";
// import wordpress from "../assets/wordpress.svg";
// import webrtc from "../assets/webrtc.svg";
// import link from "../assets/link.svg";
import git from "../assets/git.svg";
// import node from "../assets/nodejs.svg";
// import nest from "../assets/nestjs.svg";
// import postgresql from "../assets/postgresql.svg";
// import aws from "../assets/aws.svg";
// import express from "../assets/express.svg";
import redux from "../assets/redux.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
// import captiwate from "../assets/captiwate.svg";
// import futurebox from "../assets/futurebox.svg";
// import code from "../assets/code.svg";
import node from "../assets/nodejs.svg";
import sqlite from "../assets/sqlite.svg";

import whatsappbot from "../assets/whatsapp-bot.png";

import crosstech from "../assets/crosstech.svg";

export const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const heroContent = {
    title: "Welcome to My Website",
    main: "Always creating Beautiful & Functional Web Experiences",
    description:
        "I'm Royal, Full Stack Developer & this is my corner of the web!",
};

export const projects = [
    {
        img: whatsappbot,
        title: "WhatsApp Automation Bot",
        description: "An automated monitoring system built with Node.js and TypeScript. It utilizes the Baileys " + 
        "library for real-time WhatsApp connectivity and the Twilio API for immediate telephonic alerts based on keyword " +
        "triggers and identity filtering. SQLite ensures efficient local data persistence for session management and cooldown " +
        "logic, while the system is architected for 24/7 VPS deployment to ensure reliable, high-availability monitoring of " +
        "critical communication channels.",
        codebaseUrl: "https://github.com/royalh23/wp-bot-baileys",
        techStack: [
            { icon: node, name: "Node.js" },
            { icon: ts, name: "TypeScript" },
            { icon: js, name: "JavaScript" },
            { icon: sqlite, name: "SQLite" },
        ],
    },
];

export const aboutMe = [
    "I am a Computer Science student based in Budapest, Hungary, dedicated to mastering software architecture and modern " +
    "development patterns.",
    "My current work focuses on building full stack web apps and constantly improving myself in this field.",
    "I am always open to new opportunities and challenges.",
];

export const experience = [
    {
        title: "Software Developer",
        description: "Worked on scalable web applications and internal tools, focusing on frontend development, " +
        "API integration, and responsive UI implementation. Participated in feature development, debugging, and performance " +
        "optimization using modern JavaScript technologies.",
        img: crosstech,
        imgClassName: "experience-image",
    },
];

export const techStack = [
    { icon: scss, name: "SCSS" },
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: tw, name: "Tailwind CSS" },
    { icon: three, name: "Three.js" },
    { icon: redux, name: "Redux" },
    { icon: react, name: "React" },
    { icon: next, name: "Next.js" },
    { icon: ts, name: "Typescript" },
    { icon: js, name: "JavaScript" },
    { icon: sqlite, name: "SQLite" },
];

export const socials = [
    {
        icon: git,
        href: "https://github.com/royalh23",
        name: "GitHub",
    }
];
