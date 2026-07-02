"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "./projectInfo";
import ProjectModal from "./Projectmodal";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="mb-10 mt-0 md:mt-20">
      <h1 className="text-center mt-30 md:mt-10 mb-6">
        <span className="text-5xl md:text-5xl font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      <ProjectModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

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