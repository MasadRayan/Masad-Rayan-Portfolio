import React from 'react';
import { words } from '../constants/index';
import Button from '../components/Button';
import HeroExperience from '../components/HeroModels/HeroExperience';
import { useGSAP } from '@gsap/react';
import  gsap  from 'gsap';


const Hero = () => {

    useGSAP(() => {

        const tl =  gsap.timeline();

        tl.fromTo('.main-text', 
            {x: -100, opacity: 0},
            {x: 0, opacity: 1, duration: 1, ease: 'power2.out'}
        )


        tl.fromTo('.hero-text h1',
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.2, delay: -0.1}
        )
    })


    return (
        <section id='hero' className='relative md:overflow-none'>
            <div className='hero-layout'>
                {/* left: header text */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <p className='main-text md:text-[60px] text-[30px] text-white-50  relative z-10 leading-tight pointer-events-none font-extrabold'>
                            Hi, I'm <br /> Masad Rayan  <br /> Full Stack Developer.
                            
                        </p>
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
                        <Button
                            className='md:w-80 md:h-16 w-60 h-12'
                            id='button'
                            text='About Me'
                        ></Button>
                    </div>
                </header>
                {/* 3D model */}
                <figure >
                    <div className='hero-3d-layout max-h-1/2 md:max-h-max md:max-w-1/2 max-w-full md:mr-50'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Hero;