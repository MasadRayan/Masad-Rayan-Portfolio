"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const ProjectDetails = ({ selectedProject }) => {
  const { overview, problem, solution, duration, team, role } =
    selectedProject;

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


const ProjectModal = ({ selectedProject, onClose }) => {
  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent px-5 py-8 backdrop-blur-xl mt-20">
      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-[#101114] p-8 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#FF5005]"
        >
          <FaTimes />
        </button>


        <h2 className="text-4xl font-bold text-white">
          {selectedProject.title}
        </h2>

        <p className="mt-2 text-lg text-[#FF5005]">
          {selectedProject.subtitle}
        </p>


        <div className="mt-10 grid gap-8 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <ProjectImageSwiper selectedProject={selectedProject} />
          </div>

          {/* Details */}

          <div className="lg:col-span-2">
            <ProjectDetails selectedProject={selectedProject} />
          </div>
        </div>


        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-5 text-lg font-semibold text-white">
               Key Features
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


          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Tech Stack
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
  );
};

export default ProjectModal;