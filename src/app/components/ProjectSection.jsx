"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "BuyNest",
    subtitle: "E-Commerce Platform",
    image: "/projects/buynestFull.png",
    description:
      "BuyNest is a full-stack MERN e-commerce platform featuring secure authentication, role-based dashboards, SSLCommerz payment integration, downloadable PDF invoices, and an AI-powered chatbot using the Gemini API.",
    tags: ["React", "TailwindCSS", "Firebase Auth", "MongoDB", "Express.js", "Gemini API"],
    liveUrl: "https://tools-final-projectt.web.app/",
    githubUrl: "https://github.com/MasadRayan/Tools-Final-project-client",
    span: "lg:col-span-7",
    highlights: [
      "Secure checkout and payment flow with SSLCommerz",
      "Role-based dashboards for customers and admins",
      "AI chatbot support and invoice generation",
    ],
  },
  {
    id: 2,
    title: "Skill Nova",
    subtitle: "E-Learning Platform",
    image: "/projects/project1Full.png",
    description:
      "A complete MERN stack e-learning platform with role-based dashboards for students, instructors, and admins. Students can browse courses, enroll, submit assignments, and track progress.",
    tags: ["React", "TailwindCSS", "Firebase Auth", "MongoDB", "Express.js"],
    liveUrl: "https://skill-nova-app.web.app/",
    githubUrl: "https://github.com/MasadRayan/SkillNova-Client",
    span: "lg:col-span-5",
    highlights: [
      "Dedicated dashboards for students, instructors, and admins",
      "Assignment submission and progress tracking",
      "Responsive UI for learning on any device",
    ],
  },
  {
    id: 3,
    title: "Book Koro",
    subtitle: "Hotel Management Platform",
    image: "/projects/project2Full.png",
    description:
      "A complete MERN stack hotel management platform with dashboards for guests,  and admins. This supports hotel search, booking, occupancy tracking, payment integration.",
    tags: ["React", "Firebase Auth", "MongoDB", "Express.js"],
    liveUrl: "https://bookoro-app.web.app/",
    githubUrl: "https://github.com/MasadRayan/Bookoro-Client",
    span: "lg:col-span-5",
    highlights: [
      "Real-time room availability and booking updates",
      "Hotel manager tools for pricing and occupancy",
      "Streamlined admin operations for bookings and users",
    ],
  },
  {
    id: 4,
    title: "Hobby Hive",
    subtitle: "Hobby Groups Platform",
    image: "/projects/project3Full.png",
    description:
      "HobbyHive is a full-stack MERN platform that helps people discover and manage their hobby groups. It includes secure authentication, group creation, updates, and interactive community features.",
    tags: ["React", "Firebase Auth", "TailwindCSS", "MongoDB", "Express.js"],
    liveUrl: "https://tangerine-crostata-f1e467.netlify.app/",
    githubUrl: "https://github.com/MasadRayan/HobbyHive-Client",
    span: "lg:col-span-7",
    highlights: [
      "Create, join, update, and delete hobby groups",
      "Google and GitHub authentication options",
      "Responsive community experience with dark/light mode",
    ],
  },
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="mb-10 mt-0 md:mt-20">
      <h1 className="text-center mt-30 md:mt-10 mb-6">
        <span className="text-5xl md:text-5xl font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0f0f10] p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Close project details"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-semibold text-white">
              {selectedProject.title} <span className="text-[#FF5005]">{selectedProject.subtitle}</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300">{selectedProject.description}</p>

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF5005]">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#FF5005]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#ff0033] px-4 py-2 text-sm font-medium text-white"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 p-6">
        {projects.map((project) => (
          <div key={project.id} className={`${project.span} bg-black`}>
            <CardContainer className="inter-var h-full">
              <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 border-white/20 w-full lg:h-[500px] rounded-xl p-6 border flex flex-col">
                <CardItem translateZ="50" className="text-xl font-bold text-white">
                  {project.title} – <span className="text-[#FF5005]">{project.subtitle}</span>
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4 overflow-hidden rounded-xl h-60">
                  <Image
                    src={project.image}
                    loading="eager"
                    height={1000}
                    width={1000}
                    alt={`${project.title} thumbnail`}
                    className="w-full min-h-[400px] object-cover object-top transition-transform duration-3000 ease-linear group-hover/card:-translate-y-[calc(100%-240px)] group-hover/card:shadow-xl"
                  />
                </CardItem>

                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm w-full dark:text-neutral-300 mt-5 flex-1">
                  {project.description}
                </CardItem>

                <CardItem as="div" translateZ="60" className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardItem>

                <div className="flex justify-start gap-2 items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#ff0033] px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <FaGithub /> GitHub
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    rotateX={-4}
                    as="div"
                    className="w-fit"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Details
                    </button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;