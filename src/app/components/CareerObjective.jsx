import { AnimatedBorderDiv } from '@/components/ui/moving-border';
import React from 'react';

const CareerObjective = () => {
    return (
        <div id='objective' className='mb-10'>
            <h1 className='text-center mt-30 md:mt-10 mb-6'>
                <span className="text-4xl font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent">
                    Career Objective
                </span>
            </h1>
            <AnimatedBorderDiv
                borderRadius="2rem"
                duration={10000}
                className="p-6 text-lg">
                <p>
                    I am a passionate MERN Stack and Full Stack Developer focused on building efficient, scalable, and user-centric web applications. I combine clean, modular code with thoughtful design to create digital experiences that are both functional and visually impactful. <br /><br />

                    With strong skills in HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js, along with growing expertise in Node.js, Express.js, and MongoDB, I specialize in developing responsive, high-performance applications and integrating real-time data to enhance user experience. <br /><br />

                    I approach every project as an opportunity to merge logic with creativity—crafting solutions that are technically precise, scalable, and aligned with modern development standards. Currently, I am expanding my expertise in Docker, Nginx, Golang, and AWS to strengthen my capabilities in cloud architecture, scalable system design, and DevOps practices.
                </p>

            </AnimatedBorderDiv>
        </div>
    );
};

export default CareerObjective;