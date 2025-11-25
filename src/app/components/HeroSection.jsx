"use client";
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    return (
        <div className='flex justify-center items-center flex-col md:flex-row my-20 gap-10 md:gap-20'>
            <div>
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
                <Image 
                src={'/masad.jpg'}
                width={300}
                height={300}
                alt="Masad Rayan"
                />
            </div>
        </div>
    );
};

export default HeroSection;
