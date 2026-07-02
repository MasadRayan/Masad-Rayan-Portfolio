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
    image: "/projects/project-1/buynestFull.png",
    images: [
      "/projects/project-1/project1.png",
      "/projects/project1.png",
      "/projects/project1.png",
      "/projects/project1.png",
    ],
    description:
      "A full-stack MERN e-commerce platform with secure authentication, AI-powered support, and integrated online payments.",

    overview:
      "BuyNest is a modern e-commerce platform designed to provide customers with a secure, fast, and user-friendly online shopping experience. The platform enables users to browse products, manage shopping carts, complete secure SSLCommerz payments, and download PDF invoices. Administrators have dedicated dashboards for managing products, users, and orders, while an AI-powered Gemini chatbot enhances customer support and engagement.",

    highlights: [
      "Secure checkout with SSLCommerz payment integration",
      "Role-based dashboards for customers and administrators",
      "AI-powered chatbot using Gemini API",
      "Automatic PDF invoice generation",
      "Product, order, and user management",
      "Admin control panel for platform management",
      "User authentication and authorization",
      "Responsive design for all screen sizes",
    ],

    tags: [
      "React",
      "Tailwind CSS",
      "Firebase Authentication",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "SSLCommerz",
      "JWT",
      "Leaflet",
      "PDF Generation",
      "LottieFiles",
      "TanStack Query",
      "Recharts",
      "React Hook Form",
      "React Router",
      "React Toastify",
      "Leaflet Routing Machine",
      "Framer motion"
    ],
    liveUrl: "https://tools-final-projectt.web.app/",
    githubUrl: "https://github.com/MasadRayan/Tools-Final-project-client",
    // Optional extras
    duration: "1 Month",
    team: "Solo Project",
    role: "Full Stack Developer",

    span: "lg:col-span-7",
  },
  {
    id: 2,
    title: "Skill Nova",
    subtitle: "E-Learning Platform",
    image: "/projects/project1Full.png",
    images: [
      "/projects/project1.png",
      "/projects/project-2/project-2-image-2.png",
      "/projects/project-2/project-2-image-3.png",
      "/projects/project-2/project-2-image-4.png",
      "/projects/project-2/project-2-image-5.png",
      "/projects/project-2/project-2-image-6.png",
      "/projects/project-2/project-2-image-7.png",
    ],
    description:
      "A complete MERN stack e-learning platform with role-based dashboards for students, instructors, and admins. Students can browse courses, enroll, submit assignments, and track progress.",

    overview:
      "Skill Nova is a proper LMS built to connect students and instructors in one streamlined space. Students can explore available courses, enroll with a click,student can pay to enroll and can download the reciept of payment. They submit assignments, and track their learning progress in real time. Instructors get tools to publish courses and manage submissions, while admins oversee the platform through a dedicated control panel.",

    tags: ["React", "TailwindCSS", "Firebase Auth", "MongoDB", "Express.js", "Stripe", "React Hook Form", "TanStack Query", "React Router", "React Toastify", "React PDF", "LottieFiles", "GSAP", "Framer motion", "React Icons", "Leaflet", "JWT", "Axios"], 
    liveUrl: "https://skill-nova-app.web.app/",
    githubUrl: "https://github.com/MasadRayan/SkillNova-Client",
    span: "lg:col-span-5",
    highlights: [
      "Real-time course management for instructors",
      "Secured Payment integration for course enrollment with stripe",
      "Dedicated dashboards for students, instructors, and admins",
      "Assignment submission and progress tracking for students",
      "Responsive UI for learning on any device",
      "Admin control panel for platform management",
    ],

    duration: "3.5 Weeks",
    team: "Solo Project",
    role: "Full Stack Developer",
  },
  {
    id: 3,
    title: "Book Koro",
    subtitle: "Hotel Management Platform",
    image: "/projects/project2Full.png",
    images: [
      "/projects/project-2/project-2-image-2.png",
      "/projects/project-2/project-2-image-3.png",
      "/projects/project-2/project-2-image-4.png",
      "/projects/project-2/project-2-image-5.png",
      "/projects/project-2/project-2-image-6.png",
      "/projects/project-2/project-2-image-7.png",
    ],
    description:
      "A complete MERN stack hotel management platform with dashboards for guests,  and admins. This supports hotel search, booking, occupancy tracking, payment integration.",
    overview:
      "Book Koro is a complete hotel management platform designed to streamline the entire booking process. Guests can easily search for available rooms, view details, and make reservations. Hotel managers have access to powerful tools for managing room inventories, setting prices, and tracking occupancy rates. Admins can oversee all operations through a centralized control panel.",
    tags: ["React", "Firebase Auth", "MongoDB", "Express.js", "Swiper", "Marquee", "AOS", "Framer Motion", "GSAP", "Daisy UI", "Leaflet", "Leaflet Routing Machine", "JWT",],
    liveUrl: "https://bookoro-app.web.app/",
    githubUrl: "https://github.com/MasadRayan/Bookoro-Client",
    span: "lg:col-span-5",
    highlights: [
      "Real-time room availability and booking updates",
      "Filter and search for available rooms",
      "Hotel manager tools for pricing and occupancy",
      "Live review of rooms",
      "Streamlined admin operations for bookings and users",
      "Responsive UI for learning on any device",
    ],
    duration: "2.5 Weeks",
    team: "Solo Project",
    role: "Full Stack Developer",
  },
  {
    id: 4,
    title: "Hobby Hive",
    subtitle: "Hobby Groups Platform",
    image: "/projects/project-4/project5Full.png",
    images: [
      "/projects/project-4/project4.png",
      "/projects/project-4/project-4-image-2.png",
      "/projects/project-4/project-4-image-3.png",
      "/projects/project-4/project-4-image-4.png",
      "/projects/project-4/project-4-image-5.png",
    ],
    description:
      "HobbyHive is a full-stack MERN platform that helps people discover and manage their hobby groups. It includes secure authentication, group creation, updates, and interactive community features.",
    overview:
      "HobbyHive is a comprehensive platform for hobby enthusiasts to discover, join, and manage their interest groups. It provides a seamless experience for creating and interacting with hobby communities. With secure authentication, group creation, updates, and interactive community features, HobbyHive empowers users to connect and share their passions with a vibrant community. The platform also includes a dark mode option for a personalized and engaging experience.",
    tags: ["React", "Firebase Auth", "TailwindCSS", "MongoDB", "Express.js", "Swiper", "Marquee", "AOS", "Framer Motion", "GSAP", "Daisy UI", "Leaflet", "Leaflet Routing Machine", "JWT",],
    liveUrl: "https://tangerine-crostata-f1e467.netlify.app/",
    githubUrl: "https://github.com/MasadRayan/HobbyHive-Client",
    span: "lg:col-span-7",
    highlights: [
      "Create, join, update, and delete hobby groups",
      "Google and GitHub authentication options",
      "Responsive UI for learning on any device",
      "Interactive community features",
      "Responsive community experience with dark/light mode",
    ],
    duration: "1.5 Weeks",
    team: "Solo Project",
    role: "Full Stack Developer",
  },
];

// Renders the detailed info block (overview/problem/solution/meta)
// shown inside the project details modal. Fields are optional since
// not every project has overview/problem/solution/duration/team/role.
const ProjectDetails = ({ selectedProject }) => {
  const { overview, problem, solution, duration, team, role } = selectedProject;

  return (
    <div className="space-y-6">
      {overview && (
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Overview</h3>
          <p className="text-neutral-300">{overview}</p>
        </div>
      )}

      {problem && (
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Problem</h3>
          <p className="text-neutral-300">{problem}</p>
        </div>
      )}

      {solution && (
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">Solution</h3>
          <p className="text-neutral-300">{solution}</p>
        </div>
      )}

      {(duration || team || role) && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {duration && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-400">
                Duration
              </p>
              <p className="mt-1 font-medium text-white">{duration}</p>
            </div>
          )}
          {team && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-400">
                Team
              </p>
              <p className="mt-1 font-medium text-white">{team}</p>
            </div>
          )}
          {role && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-neutral-400">
                Role
              </p>
              <p className="mt-1 font-medium text-white">{role}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Simple dependency-free image carousel for the project details modal.
// Falls back to the single `image` field if a project has no `images` array.
const ProjectImageSwiper = ({ selectedProject }) => {
  const slides =
    selectedProject.images && selectedProject.images.length > 0
      ? selectedProject.images
      : [selectedProject.image];

  const [index, setIndex] = useState(0);

  // Reset to first slide whenever the selected project changes
  React.useEffect(() => {
    setIndex(0);
  }, [selectedProject]);

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goNext = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 h-[340px] ">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="w-full shrink-0">
            <Image
              src={src}
              alt={`${selectedProject.title} screenshot ${i + 1}`}
              width={1000}
              height={800}
              className="w-full h-[350px] object-contain"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          {/* Prev / Next */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-[#FF5005]"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-[#FF5005]"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-[#FF5005]" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent px-5 py-8 backdrop-blur-xl mt-20">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-[#101114] p-8 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#FF5005]"
            >
              <FaTimes />
            </button>

            {/* Heading */}

            <h2 className="text-4xl font-bold text-white">
              {selectedProject.title}
            </h2>

            <p className="mt-2 text-lg text-[#FF5005]">
              {selectedProject.subtitle}
            </p>

            {/* Top Section */}

            <div className="mt-10 grid gap-8 lg:grid-cols-4">
              {/* Swiper */}

              <div className="lg:col-span-2">
                <ProjectImageSwiper selectedProject={selectedProject} />
              </div>

              {/* Details */}

              <div className="lg:col-span-2">
                <ProjectDetails selectedProject={selectedProject} />
              </div>
            </div>

            {/* Bottom */}

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Features */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-5 text-lg font-semibold text-white">
                  ✨ Key Features
                </h3>

                <ul className="space-y-4">
                  {selectedProject.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-neutral-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#FF5005]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-5 text-lg font-semibold text-white">
                  🛠 Tech Stack
                </h3>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#FF5005]/40 bg-[#FF5005]/10 px-4 py-2 text-sm text-[#FFB26B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#FF5005] px-6 py-3 font-semibold text-white transition hover:bg-[#ff6a2b]"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                <FaGithub />
                GitHub Repository
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
                <CardItem
                  translateZ="30"
                  className="text-xl font-bold text-white"
                >
                  {project.title} –{" "}
                  <span className="text-[#FF5005]">{project.subtitle}</span>
                </CardItem>

                <CardItem
                  translateZ="30"
                  className="w-full mt-4 overflow-hidden rounded-xl h-60"
                >
                  <Image
                    src={project.image}
                    loading="eager"
                    height={1000}
                    width={1000}
                    alt={`${project.title} thumbnail`}
                    className="w-full min-h-[400px] object-cover object-top transition-transform duration-3000 ease-linear group-hover/card:-translate-y-[calc(100%-240px)] group-hover/card:shadow-xl"
                  />
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="30"
                  className="text-neutral-500 text-sm w-full dark:text-neutral-300 mt-5 flex-1"
                >
                  {project.description}
                </CardItem>

                <CardItem as="div" translateZ="30" className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">
                        +{project.tags.length - 5} more
                      </span>
                    )}
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
