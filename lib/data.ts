import swiftcartImg from "@/public/swiftcart.png";
import facedetectionImg from "@/public/face_detection.png";
import memoryImg from "@/public/memory.jpeg";
import sketchImg from "@/public/sketch.png";
import React from "react";
import {FaSchool} from "react-icons/fa";
import {IoSchoolSharp} from "react-icons/io5";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ramakrishna Mission Vidyapith",
    location: "Deoghar, Jharkhand",
    description:
      "I completed my senior secondary school education from Ramakrishna Mission Vidyapith, Deoghar, Jharkhand with the subjects Physics, Chemistry, Mathematics, and Computer Science.",
    icon: React.createElement(FaSchool),
    date: "2019 - 2021",
  },
  {
    title: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu",
    description:
      "I am currently pursuing my Bachelor's degree in Computer Science and Engineering from Vellore Institute of Technology, Vellore, Tamil Nadu.",
    icon: React.createElement(IoSchoolSharp),
    date: "2021 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Sketch",
    description:
      "Sketch is an interactive web-based painting application using HTML, CSS, and Vanilla JavaScript. It implements a dynamic grid system that allows users to specify custom canvas sizes",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: sketchImg,
    redirectUrl: "#",
  },
  {
    title: "Memory game",
    description:
      "An interactive memory card game using ReactJS. Players must avoid clicking the same card twice. It also incorporates randomization algorithm to shuffle card positions after each successful click.",
    tags: ["HTML", "CSS", "ReactJS"],
    imageUrl: memoryImg,
    redirectUrl: "#",
  },
  {
    title: "SwiftCart",
    description:
      "SwiftCart is a responsive e-commerce web application using ReactJS and modern web technologies. It integrates FakeStore API to dynamically fetch and display product data, including images and reviews.",
    tags: ["HTML", "CSS", "ReactJS", "REST API"],
    imageUrl: swiftcartImg,
    redirectUrl: "https://staging.prospectix.juniorisep.com",
  },
  {
    title: "Face Detection attendance system",
    description:
      "An automated attendance system using computer vision and facial recognition technology. It uses real-time face detection and recognition from camera feed using OpenCV and PIL libraries.",
    tags: ["Python", "OpenCV", "PIL"],
    imageUrl: facedetectionImg,
    redirectUrl: "https://chromewebstore.google.com/detail/digital-awareness",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C/C++",
  "R",
  "JavaScript",
  "ReactJS",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Framer",
  "SQL",
  "Git",
  "pandas",
  "numpy",
  "scikit-learn",
  "Matplotlib",
  "OpenCV",
  "AWS",
] as const;
