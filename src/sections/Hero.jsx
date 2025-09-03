import React from 'react';
import { words } from '../constants/index';


const Hero = () => {
    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className='hero-layout'>
                {/* left: header text */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <p className='md:text-[60px] text-[30px] text-white-50  relative z-10 leading-tight pointer-events-none'>Hi, I'm <br /> Masad Rayan  <br /> Full Stack Developer.</p>
                        <div className='hero-text md:text-2xl text-lg'>
                            <h1>
                                <span className='mr-3 md:mr-0'>Shapping</span>
                                <span className='slide pb-2'>
                                    <span className='wrapper md:-ml-3 '>
                                        {words.map((word, index) => (
                                            <span className='flex items-center md:gap-2 gap-1 pb-2' key={index}>
                                                <img className='md:size-9  size-7 md:p-2 p-1 rounded-full bg-white-50' src={word.imgPath} alt={word.text} />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>

                            <h1 className='mt-2'>into real projects</h1>
                            <h1 className='mt-2'>that Deliver Results</h1>
                        </div>
                        
                    </div>
                </header>
                {/* 3D model */}
            </div>
        </section>
    );
};

export default Hero;