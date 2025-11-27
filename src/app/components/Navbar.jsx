"use client";

import GooeyNav from "@/components/GooeyNav";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const items = [
    { label: "Home", href: "#home" },
    { label: "Objective", href: "#objective" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = items.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% visible = active
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-3 md:px-10 sticky top-0 z-100 bg-transparent backdrop-blur-md">
      <nav className="flex justify-between items-center py-5">

        <p className="text-xl font-bold font-funnel text-white">
          Masad Rayan
        </p>

        <div className="hidden md:block">
          <GooeyNav
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        <div>
          <a href="/masad_rayan_cv.pdf" download="Masad_Rayan_CV.pdf">
            <span className="text-white btn bg-[#FF500599] px-4 py-2 rounded-lg font-funnel font-semibold text-lg cursor-pointer hover:scale-105 hover:text-white">
              Download CV
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
