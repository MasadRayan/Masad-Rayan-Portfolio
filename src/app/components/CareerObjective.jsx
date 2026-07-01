"use client";

import React from "react";
import { AnimatedBorderDiv } from "@/components/ui/moving-border";
import { Code2, Lightbulb, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const CareerObjective = () => {
    return (
        <section id="aboutMe" className="px-4 mb-24">

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
                            I craft digital solutions that are{" "}
                            <span >simple</span>,{" "}
                            <span >functional</span>, and{" "}
                            <span >impactful</span>.
                        </h3>

                        <p className="text-[#C9C9C9] leading-relaxed">
                            I am Masad Rayan, I’m a passionate MERN Stack Developer focused on building
                            modern, scalable web applications. My journey started with
                            curiosity about how websites work, and it gradually evolved
                            into a deep interest in full-stack development and system design.
                        </p>

                        <p className="text-[#C9C9C9] leading-relaxed">
                            Alongside development, I work in a professional environment
                            where I’ve developed strong analytical thinking, attention to detail,
                            and problem-solving skills that directly improve my engineering approach.
                        </p>

                        <p className="text-[#C9C9C9] leading-relaxed">
                            Today, I focus on building clean UI systems, efficient backend APIs,
                            and continuously improving my skills in modern technologies like
                            React, Node.js, and cloud-based architectures.
                        </p>
                        <p className="text-[#C9C9C9] leading-relaxed">
                            My goal is to contribute to projects that make a meaningful impact, while
                            continuously learning and growing as a developer. I believe in the power of
                            collaboration, and I enjoy working with others to bring ideas to life.
                        </p>

                    </div>


                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">


                        <div className={cn(
                            "p-6 rounded-2xl border border-[#1B3C53]",
                            "bg-[#5C4F4A] hover:border-[#4A70A9] transition"
                        )}>
                            <Code2 className="text-orange-400 mb-3" />
                            <h4 className="text-lg font-semibold text-[#EFECE3]">
                                Problem Solving
                            </h4>
                            <p className="text-sm text-[#C9C9C9] mt-2">
                                I enjoy breaking down complex problems into simple,
                                scalable engineering solutions.
                            </p>
                        </div>


                        <div className={cn(
                            "p-6 rounded-2xl border border-[#1B3C53]",
                            "bg-[#5C4F4A] hover:border-[#4A70A9] transition"
                        )}>
                            <Lightbulb className="text-orange-400 mb-3" />
                            <h4 className="text-lg font-semibold text-[#EFECE3]">
                                Clean Architecture
                            </h4>
                            <p className="text-sm text-[#C9C9C9] mt-2">
                                I focus on writing maintainable, modular, and
                                scalable code structures.
                            </p>
                        </div>


                        <div className={cn(
                            "p-6 rounded-2xl border border-[#1B3C53]",
                            "bg-[#5C4F4A] hover:border-[#4A70A9] transition"
                        )}>
                            <BookOpen className="text-orange-400 mb-3" />
                            <h4 className="text-lg font-semibold text-[#EFECE3]">
                                Continuous Learning
                            </h4>
                            <p className="text-sm text-[#C9C9C9] mt-2">
                                I constantly explore new technologies and
                                improve my development workflow.
                            </p>
                        </div>

                    </div>

                </div>

            </AnimatedBorderDiv>

        </section>
    );
};

export default CareerObjective;