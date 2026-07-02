"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div
      className="w-full bg-transparent font-sans"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto  ">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 last:mb-0"
          >
            {/* Left Side - Review Card (Hidden on Mobile) */}
            <div className="hidden md:flex md:col-span-5 justify-end items-start">
              <div
                className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors max-w-md w-full h-auto relative overflow-hidden"
                onMouseMove={handleMouseMove}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className="absolute w-40 h-40 bg-orange-500 rounded-full blur-3xl transition-all duration-200"
                    style={{
                      left: 'var(--mouse-x, 50%)',
                      top: 'var(--mouse-y, 50%)',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed font-semibold relative z-10">
                  {item.review}
                </p>
              </div>
            </div>

            {/* Center - Logo on Timeline (Desktop) */}
            <div className="hidden md:flex md:col-span-2 justify-center items-start relative z-10">
              <div className="h-22 w-22 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.logoPath}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain h-full w-full p-2"
                />
              </div>
            </div>

            {/* Mobile Layout - Logo + Card */}
            <div className="md:hidden flex gap-4 items-start relative">
              {/* Logo on Timeline (Mobile) */}
              <div className="shrink-0 relative z-10">
                <div className="h-16 w-16 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.logoPath}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain h-full w-full p-1"
                  />
                </div>
              </div>

              {/* Details Card (Mobile) */}
              <div className="flex-1">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-neutral-400 text-sm mb-4">
                    {item.date}
                  </p>
                  <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                    {item.review}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-300 mb-2 italic">
                      Key Learnings
                    </h4>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-neutral-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-orange-500 mt-1 shrink-0">
                            •
                          </span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Details Card (Desktop Only) */}
            <div className="hidden md:block md:col-span-5">
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h2>
                {
                  item.subject&& (
                    <p className="text-neutral-200 font-semibold text-lg md:text-xl mb-4">
                      {item.subject}
                    </p>
                  )
                }
                <p className="text-neutral-400 text-sm mb-4">
                  {item.date}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-300 mb-2 italic">
                    Key Learnings
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-orange-500 mt-1 shrink-0">
                          •
                        </span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Vertical Timeline Line - Starts from first logo (Desktop Only) */}
        <div
          style={{
            height: height - 50 + "px",
          }}
          className="absolute left-1/2 top-10 -translate-x-1/2 w-0.5 bg-neutral-800 hidden md:block"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-b from-orange-500 via-orange-400 to-transparent"
          />
        </div>

        {/* Vertical Timeline Line - Mobile */}
        <div
          style={{
            height: height -40 + "px",
          }}
          className="absolute left-8 top-10 -translate-x-1/2 w-0.5 bg-neutral-800 md:hidden"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-b from-orange-500 via-orange-400 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};