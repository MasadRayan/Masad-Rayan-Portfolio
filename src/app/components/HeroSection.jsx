"use client";
import GlassmorphismProfileCard from '@/components/GlassmorphismProfileCard';
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { CometCard } from "@/components/ui/comet-card";


const HeroSection = () => {
    return (
        <div id='home' className='flex justify-center items-center flex-col md:flex-row md:gap-20 max-h-screen'>
            <div className='text-center md:text-start'>
                <p className='leading-10'>
                    <span className='text-5xl font-bold'>Hi I'm Masad Rayan</span><br />
                    <span className='text-3xl font-semibold'>A Developer</span> <br />
                    <span className='text-3xl font-semibold'>Dedicated to Crafting</span> <br />

                    {/* 🔥 Typewriter Section */}
                    <span className='text-3xl font-semibold text-[#FF5005]'>
                        <Typewriter
                            words={['Modern', 'Scalable', 'Secure']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={1200}
                        />
                    </span>
                    <br />

                    <span className='text-3xl font-semiboldl'>Web Solutions</span>
                </p>
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
                            <div className="text-lg">Masad Rayan</div>
                        </div>
                    </button>
                </CometCard>
            </div>
        </div>
    );
};

export default HeroSection;




