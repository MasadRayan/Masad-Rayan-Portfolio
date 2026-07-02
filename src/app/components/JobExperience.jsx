"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaLaptop,
  FaCheckCircle,
} from "react-icons/fa";
import { experiences } from "./Experience";

// Reveals its target once when it scrolls into view. Stays revealed —
// a timeline shouldn't replay every time you scroll past it.
const useInView = (options = { threshold: 0.25 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
};

const MetricTile = ({ value, label }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
    <p className="text-2xl font-bold text-[#FF5005]">{value}</p>
    <p className="mt-1 text-xs uppercase tracking-wide text-neutral-400">
      {label}
    </p>
  </div>
);

const ExperienceCard = ({ experience, isLast, alignRight }) => {
  const [ref, inView] = useInView();

  const cardBody = (
    <div className="rounded-2xl border border-white/10 bg-black p-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-lg font-semibold text-[#FF5005]">
          {experience.company}
        </span>
        <span className="text-sm text-neutral-400">
          {experience.companyType}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-300 sm:flex-row sm:flex-wrap sm:gap-x-6">
        <span className="flex items-center gap-2">
          <FaBuilding className="shrink-0 text-[#FF5005]" />
          {experience.location}
        </span>
        {experience.teamLocation && (
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="shrink-0 text-[#FF5005]" />
            Team based in {experience.teamLocation}
          </span>
        )}
        <span className="flex items-center gap-2">
          <FaLaptop className="shrink-0 text-[#FF5005]" />
          {experience.workMode} 
        </span>
      </div>
      <ul className="mt-5 space-y-3">
        {experience.highlights.map((point) => (
          <li key={point} className="flex items-start gap-3 text-neutral-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5005]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={ref} className="relative pb-16 last:pb-0 md:pb-20">
      {/* Connector line to the next role (omitted after the last item) */}
      {!isLast && (
        <>
          <span
            className="absolute left-[15px] top-8 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <span
            className={`absolute left-[15px] top-8 bottom-0 w-px origin-top bg-[#FF5005] transition-transform duration-700 ease-out motion-reduce:transition-none md:left-1/2 md:-translate-x-1/2 ${
              inView ? "scale-y-100" : "scale-y-0"
            }`}
            aria-hidden="true"
          />
        </>
      )}

      {/* Timeline node — centered on the spine on desktop, left-aligned on mobile */}
      <span
        className={`absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FF5005] bg-[#101114] transition-all duration-500 ease-out motion-reduce:transition-none md:left-1/2 md:-translate-x-1/2 ${
          inView ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
        aria-hidden="true"
      >
        {experience.current ? (
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5005] animate-pulse motion-reduce:animate-none" />
        ) : (
          <FaCheckCircle className="h-3.5 w-3.5 text-[#FF5005]" />
        )}
      </span>

      {/* Content: single column + left offset on mobile, alternating half-width column on desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-x-16">
        <div
          className={`pl-12 transition-all duration-700 ease-out motion-reduce:transition-none md:pl-0 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          } ${
            alignRight
              ? "md:col-start-2 md:pl-16"
              : "md:col-start-1 md:col-end-2 md:row-start-1 md:pr-16"
          }`}
          style={{ transitionDelay: inView ? "150ms" : "0ms" }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-white md:text-4xl">
              {experience.role}
            </h3>
          </div>

          <p className="mt-1 text-sm font-medium text-neutral-400">
            {experience.startDate} — {experience.endDate}
          </p>

          <div className="mt-4">{cardBody}</div>
        </div>
      </div>
    </div>
  );
};

const JobExperience = () => {
  return (
    <section id="experience" className="mb-10 mt-0 md:mt-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5005]">
          Career
        </p>
        <h1 className="mt-2 mb-6">
          <span className="text-5xl md:text-5xl font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
      </div>

      <div className="mx-auto max-w-5xl md:max-w-7xl px-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
            alignRight={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default JobExperience;
