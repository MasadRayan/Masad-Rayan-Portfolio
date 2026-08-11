
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
                    I'm Masad Rayan, a Full Stack Developer who loves building modern, scalable web apps.
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5005]" />
                <span>
                  <p className="text-[#C9C9C9]/95 text-lg leading-relaxed">
                    I bring an analytical, detail-focused mindset to writing clean, maintainable code.
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5005]" />
                <span>
                  <p className="text-[#C9C9C9]/95 text-lg leading-relaxed">
                    I work across the stack with React, Node.js, Express.js, and MongoDB.
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5005]" />
                <span>
                  <p className="text-[#C9C9C9]/95 text-lg leading-relaxed">
                    My goal: build real value, grow with great teams, and keep learning.
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
                Breaking down complex problems into simple solutions.
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
                Writing maintainable, modular, scalable code.
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
                Always exploring new tools and workflows.
              </p>
            </div>
          </div>
        </div>
      </AnimatedBorderDiv>
    </section>
  );
};

export default CareerObjective;