"use client";

import React from "react";
import { AnimatedBorderDiv } from "@/components/ui/moving-border";
import { Code2, Lightbulb, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const CareerObjective = () => {
  return (
    <section id="aboutMe" className="px-4 mb-24 mt-30 lg:mt-0">
      {/* Section Title */}
      <div className="text-center mb-10">
        <span className="text-5xl font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent">
          About Me
        </span>
      </div>

      <AnimatedBorderDiv
        borderRadius="2rem"
        duration={9000}
        className="p-8 md:p-12 text-[#EFECE3]"
      >
        <div className="space-y-10">
          {/* Hero Text */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-4xl font-bold leading-snug text-[#EFECE3]">
              I craft digital solutions that are simple, functional, and impactful.
            </h3>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5005]" />
                <span>
                  <p className="text-[#C9C9C9]/95 text-lg leading-relaxed">
                    I'm Masad Rayan, a passionate Full Stack Developer who enjoys building modern, scalable, and user-focused web applications. My journey into web development began with a curiosity about how websites work, which gradually evolved into a strong passion for full-stack development and creating seamless digital experiences.
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5005]" />
                <span>
                  <p className="text-[#C9C9C9]/95 text-lg leading-relaxed">
                    Beyond development, my professional experience has strengthened my analytical thinking, attention to detail, and problem-solving abilities. These qualities help me approach software engineering with a structured mindset and a focus on writing clean, maintainable, and efficient code.
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5005]" />
                <span>
                  <p className="text-[#C9C9C9]/95 text-lg leading-relaxed">
                    I specialize in developing responsive user interfaces, designing scalable backend APIs, and building applications using modern technologies such as React, Node.js, Express.js, MongoDB, and related tools within the JavaScript ecosystem. I enjoy transforming ideas into reliable, high-quality solutions while continuously expanding my technical expertise.
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5005]" />
                <span>
                  <p className="text-[#C9C9C9]/95 text-lg leading-relaxed">
                    My goal is to contribute to meaningful products that create real value for users, collaborate with talented teams, and keep growing as a software engineer through continuous learning and hands-on experience.
                  </p>
                </span>
              </li>
            </ul> 
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            <div
              className={cn(
                "p-6 rounded-2xl border border-[#1B3C53]",
                "bg-[#5C4F4A] hover:border-[#4A70A9] transition",
              )}
            >
              <Code2 className="text-orange-400 mb-3" />
              <h4 className="text-lg font-semibold text-[#EFECE3]">
                Problem Solving
              </h4>
              <p className="text-sm text-[#C9C9C9] mt-2">
                I enjoy breaking down complex problems into simple, scalable
                engineering solutions.
              </p>
            </div>

            <div
              className={cn(
                "p-6 rounded-2xl border border-[#1B3C53]",
                "bg-[#5C4F4A] hover:border-[#4A70A9] transition",
              )}
            >
              <Lightbulb className="text-orange-400 mb-3" />
              <h4 className="text-lg font-semibold text-[#EFECE3]">
                Clean Architecture
              </h4>
              <p className="text-sm text-[#C9C9C9] mt-2">
                I focus on writing maintainable, modular, and scalable code
                structures.
              </p>
            </div>

            <div
              className={cn(
                "p-6 rounded-2xl border border-[#1B3C53]",
                "bg-[#5C4F4A] hover:border-[#4A70A9] transition",
              )}
            >
              <BookOpen className="text-orange-400 mb-3" />
              <h4 className="text-lg font-semibold text-[#EFECE3]">
                Continuous Learning
              </h4>
              <p className="text-sm text-[#C9C9C9] mt-2">
                I constantly explore new technologies and improve my development
                workflow.
              </p>
            </div>
          </div>
        </div>
      </AnimatedBorderDiv>
    </section>
  );
};

export default CareerObjective;
