"use client";
import React from 'react';
import { Timeline } from "@/components/ui/timeline";

const data = [
    {
        review: "Studying at IIUC has been an enriching experience, helping me strengthen my foundations in computer science while exploring research and practical projects that align with my passion for technology.",
        logoPath: "/education/university.png",
        title: "International Islamic University Chittagong",
        date: "2023 - Present",
        responsibilities: [
            "Pursuing a Bachelor's degree in Computer Science & Engineering.",
            "Engaging in coursework focused on software engineering, data structures, and algorithms.",
            "Participating in research and projects to apply classroom knowledge to real-world problems.",
        ],
    },
    {
        review: "During my Higher Secondary studies in the Science stream, I developed a strong academic foundation and achieved excellent results. These years shaped my analytical and problem-solving abilities.",
        logoPath: "/education/college.jpg",
        title: "Hajera Taju Degree College",
        date: "2019 - 2021",
        responsibilities: [
            "Studied Science under the National Curriculum with a focus on Physics, Chemistry, Biology, and Mathematics.",
            "Achieved GPA 5.00 in HSC (Higher Secondary Certificate).",
        ],
    },
    {
        review: "My school years at CDA Public School and College built the foundation of my academic journey. Alongside excelling in Science, I actively participated in sports and co-curricular activities, shaping both discipline and teamwork skills.",
        logoPath: "/education/school.png",
        title: "CDA Public School and College",
        date: "2017 - 2019",
        responsibilities: [
            "Studied Science at the secondary level with a strong focus on core subjects like Physics, Chemistry, and Mathematics.",
            "Achieved GPA 4.94 in SSC (Secondary School Certificate).",
            "Actively participated in sports and school events, developing discipline and teamwork abilities.",
        ],
    },
];

const EducationJourney = () => {
    return (
        <section id='education' className='w-full mt-20 md:mt-20 px-6 md:px-20'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-10'>
                    <h1 className='text-5xl md:text-6xl font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent'>
                        Education Journey
                    </h1>
                    <p className='text-neutral-400 mt-4 text-lg'>
                        My academic background 
                    </p>
                </div>

                {/* Timeline */}
                <Timeline data={data} />
            </div>
        </section>
    );
};

export default EducationJourney;