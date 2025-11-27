import { AnimatedBorderDiv } from '@/components/ui/moving-border';
import React from 'react';

const CareerObjective = () => {
    return (
        <div id='objective' className='mb-10 px-3'>
            <h1 className='text-center mt-20 md:mt-10 mb-6'>
                <span className="text-5xl font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent">
                    Career Objective
                </span>
            </h1>
            <AnimatedBorderDiv
                borderRadius="2rem"
                duration={10000}
                className="p-6 text-lg ">
                <div>
                    <span className='text-4xl font-bold'>I am a passionate MERN Stack & Full Stack Developer. </span> <br /> <br />

                    <ul className="list-disc space-y-3 ml-5 ">
                        <li>Combine clean, modular code with thoughtful design for functional and visually appealing experiences.</li>
                        <li>Skilled in <strong>HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js</strong> for modern front-end development.</li>
                        <li>Experienced with <strong>Node.js, Express.js, MongoDB</strong> for full-stack applications and real-time data integration.</li>
                        <li>Approach projects with creativity and technical precision for scalable solutions.</li>
                        <li>Expanding expertise in <strong>Docker, Nginx, Golang, and AWS</strong> for cloud and DevOps practices.</li>
                    </ul>

                </div>

            </AnimatedBorderDiv>
        </div>
    );
};

export default CareerObjective;