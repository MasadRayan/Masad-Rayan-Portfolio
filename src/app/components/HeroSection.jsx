"use client";
import GlassmorphismProfileCard from '@/components/GlassmorphismProfileCard';
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { CometCard } from "@/components/ui/comet-card";


const HeroSection = () => {
    return (
        <section id='home' className='flex justify-center items-center flex-col md:flex-row md:gap-20 max-h-screen mt-20 md:mt-0'>
            <div className="text-center md:text-start">
                <div className="space-y-2 leading-snug">
                    <h1 className="text-5xl font-bold">Hi, I&apos;m Masad Rayan</h1>
                    <h2 className="text-3xl font-semibold">A Full Stack Developer</h2>
                    <h2 className="text-3xl font-semibold">Dedicated to Crafting</h2>

                    <h2 className="text-3xl font-semibold text-[#FF5005]">
                        <Typewriter
                            words={["Modern", "Scalable", "Secure"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={1200}
                        />
                    </h2>

                    <h2 className="text-3xl font-semibold">Web Solutions</h2>
                </div>
            </div>

            {/* image */}
            <div>
                <CometCard>
                    <button
                        type="button"
                        className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
                        aria-label="View invite F7RA"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "none",
                            opacity: 1,
                        }}>

                        <div className="mx-2 flex-1">
                            <div className="relative mt-2 aspect-3/4 w-full">
                                <Image
                                    loading="eager"
                                    className="absolute inset-0 h-full w-full rounded-2xl object-cover "
                                    alt="Masad Rayan "
                                    src="/masad.jpg"
                                    width={320}
                                    height={427}
                                    style={{
                                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                        opacity: 1,
                                    }} />
                            </div>
                        </div>
                        <div
                            className="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
                            <div className="text-lg text-[#FF5005] font-semibold">Masad Rayan</div>
                        </div>
                    </button>
                </CometCard>
            </div>
        </section>
    );
};

export default HeroSection;




