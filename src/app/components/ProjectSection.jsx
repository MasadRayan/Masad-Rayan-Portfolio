"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const ProjectSection = () => {
    return (
        <section id='projects' className='mb-10 mt-0 md:mt-20'>
            <h1 className='text-center mt-30 md:mt-10 mb-6'>
                <span className="text-5xl md:text-5xl  font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent">
                    Projects
                </span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 p-6'>
                {/* First Project */}
                <div className="lg:col-span-5 bg-black">
                    <CardContainer className="inter-var h-full">
                        <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 border-white/20 w-full lg:h-[600px] rounded-xl p-6 border flex flex-col">
                            {/* Title */}
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-white"
                            >
                                Skill Nova – <span className="text-[#FF5005]"> E-Learning Platform</span>
                            </CardItem>

                            {/* Image */}
                            <CardItem translateZ="100" className="w-full mt-4 overflow-hidden rounded-xl h-60">
                                <Image
                                    src={'/projects/project1Full.png'}
                                    loading="eager"
                                    height={1000}
                                    width={1000}
                                    alt="thumbnail"
                                    className="w-full min-h-[400px] object-cover object-top transition-transform duration-3000 ease-linear group-hover/card:-translate-y-[calc(100%-240px)] group-hover/card:shadow-xl"

                                />
                            </CardItem>
                            {/* Description  */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm w-full dark:text-neutral-300 mt-5 flex-1"
                            >
                                A complete MERN stack e-learning platform with role-based dashboards for Students, Instructors, and Admins. Students can browse courses, enroll, submit assignments, and track progress. Instructors can create and manage classes, post assignments, and review submissions. Admins oversee users, courses, and feedback. The app features secure authentication, real-time progress tracking, and a fully responsive design.
                            </CardItem>
                            {/* Tech Stack */}
                            <CardItem
                                as="div"
                                translateZ="60"
                                className="mt-5"
                            >
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full">React</span>
                                    <span className="bg-blue-500 text-white px-3 py-1 text-xs rounded-full">TailwindCSS</span>
                                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 text-xs rounded-full">Firebase Auth</span>
                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs rounded-full">MongoDB</span>
                                    <span className="bg-gray-500/20 text-gray-300 px-3 py-1 text-xs rounded-full">Express.js</span>
                                    <span className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">+7</span>
                                </div>
                            </CardItem>
                            <div className="flex justify-start gap-2 items-center mt-6">
                                {/* Live Demo */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://skill-nova-app.web.app/"
                                    target="__blank"
                                    className="flex items-center gap-2 bg-[#ff0033] px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </CardItem>
                                {/* GitHub */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://github.com/MasadRayan/SkillNova-Client"
                                    target="__blank"
                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
                                >
                                    <FaGithub /> GitHub
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                {/* Second Project */}
                <div className="lg:col-span-7 bg-black">
                    <CardContainer className="inter-var h-full">
                        <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 border-white/20 w-full lg:h-[600px] rounded-xl p-6 border flex flex-col">
                            {/* Title */}
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-white"
                            >
                                Book Koro – <span className="text-[#FF5005]"> Hotel Management Platform</span>
                            </CardItem>

                            {/* Image */}
                            <CardItem translateZ="100" className="w-full mt-4 overflow-hidden rounded-xl h-60">
                                <Image
                                    src={'/projects/project2Full.png'}
                                    loading="eager"
                                    height={1000}
                                    width={1000}
                                    alt="thumbnail"
                                    className="w-full min-h-[400px] object-cover object-top transition-transform duration-3000 ease-linear group-hover/card:-translate-y-[calc(100%-240px)] group-hover/card:shadow-xl"

                                />
                            </CardItem>
                            {/* Description  */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm w-full dark:text-neutral-300 mt-5 flex-1"
                            >
                                A complete MERN stack hotel management platform with role-based dashboards for Guests,
                                Hotel Managers, and Admins. Guests can search hotels, check availability, make
                                bookings, and manage reservations. Hotel Managers can add and update room details, set pricing, track occupancy, and handle customer requests. Admins oversee users, hotels,
                                and transactions to ensure smooth operations. The app features secure authentication,
                                real-time booking updates, payment integration, and a fully responsive design.
                            </CardItem>
                            {/* Tech Stack */}
                            <CardItem
                                as="div"
                                translateZ="60"
                                className="mt-5"
                            >
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full">React</span>
                                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 text-xs rounded-full">Firebase Auth</span>
                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs rounded-full">MongoDB</span>
                                    <span className="bg-gray-500/20 text-gray-300 px-3 py-1 text-xs rounded-full">Express.js</span>
                                    <span className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">+5</span>
                                </div>
                            </CardItem>
                            <div className="flex justify-start gap-2 items-center mt-6">
                                {/* Live Demo */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://bookoro-app.web.app/"
                                    target="__blank"
                                    className="flex items-center gap-2 bg-[#ff0033] px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </CardItem>
                                {/* GitHub */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://github.com/MasadRayan/Bookoro-Client"
                                    target="__blank"
                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
                                >
                                    <FaGithub /> GitHub
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                {/* Third Project */}
                <div className="lg:col-span-7 bg-black">
                    <CardContainer className="inter-var h-full">
                        <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 border-white/20 w-full lg:h-[600px] rounded-xl p-6 border flex flex-col">
                            {/* Title */}
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-white"
                            >
                                Hobby Hive – <span className="text-[#FF5005]"> Hobby Groups Platform</span>
                            </CardItem>

                            {/* Image */}
                            <CardItem translateZ="100" className="w-full mt-4 overflow-hidden rounded-xl h-60">
                                <Image
                                    src={'/projects/project3Full.png'}
                                    loading="eager"
                                    height={1000}
                                    width={1000}
                                    alt="thumbnail"
                                    className="w-full min-h-[400px] object-cover object-top transition-transform duration-3000 ease-linear group-hover/card:-translate-y-[calc(100%-240px)] group-hover/card:shadow-xl"

                                />
                            </CardItem>
                            {/* Description  */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm w-full dark:text-neutral-300 mt-5 flex-1"
                            >
                                HobbyHive is a full-stack MERN platform that helps people discover and manage their
                                hobby groups. Users can register or log in using email, Google, or GitHub, with secure
                                authentication and route protection. The app allows users to create, join, update, and
                                delete groups while viewing all available ones. It features a responsive design with
                                dark/light mode, animations, and interactive maps. The backend is powered by MongoDB
                                with full CRUD operations, and the project is deployed using Netlify (client) and
                                Vercel (server).
                            </CardItem>
                            {/* Tech Stack */}
                            <CardItem
                                as="div"
                                translateZ="60"
                                className="mt-5"
                            >
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full">React</span>
                                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 text-xs rounded-full">Firebase Auth</span>
                                    <span className="bg-blue-500 text-white px-3 py-1 text-xs rounded-full">TailwindCSS</span>
                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs rounded-full">MongoDB</span>
                                    <span className="bg-gray-500/20 text-gray-300 px-3 py-1 text-xs rounded-full">Express.js</span>
                                    <span className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">+4</span>
                                </div>
                            </CardItem>
                            <div className="flex justify-start gap-2 items-center mt-6">
                                {/* Live Demo */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://tangerine-crostata-f1e467.netlify.app/"
                                    target="__blank"
                                    className="flex items-center gap-2 bg-[#ff0033] px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </CardItem>
                                {/* GitHub */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://github.com/MasadRayan/HobbyHive-Client"
                                    target="__blank"
                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
                                >
                                    <FaGithub /> GitHub
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                {/* Fourth Project */}
                <div className="lg:col-span-5 bg-black">
                    <CardContainer className="inter-var h-full">
                        <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 border-white/20 w-full lg:h-[600px] rounded-xl p-6 border flex flex-col">
                            {/* Title */}
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-white"
                            >
                                Car Doctor – <span className="text-[#FF5005]"> Car Service Platform</span>
                            </CardItem>

                            {/* Image */}
                            <CardItem translateZ="100" className="w-full mt-4 overflow-hidden rounded-xl h-60">
                                <Image
                                    src={'/projects/project4Full.png'}
                                    loading="eager"
                                    height={1000}
                                    width={1000}
                                    alt="thumbnail"
                                    className="w-full min-h-[400px] object-cover object-top transition-transform duration-3000 ease-linear group-hover/card:-translate-y-[calc(100%-240px)] group-hover/card:shadow-xl"

                                />
                            </CardItem>
                            {/* Description  */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm w-full dark:text-neutral-300 mt-5 flex-1"
                            >
                                Car Doctor is an intuitive web app for booking car services online. Users can browse services, schedule appointments, and make secure payments easily. The platform features a smart AI chatbot that answers service and booking queries instantly. Built with React, Next.js, Tailwind CSS, and Express, it demonstrates a modern, responsive, and user-friendly car service management solution. The project also have a personalized chatbot integrated using Google AI Studio API to enhance user experience.
                            </CardItem>
                            {/* Tech Stack */}
                            <CardItem
                                as="div"
                                translateZ="60"
                                className="mt-5"
                            >
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full">NextJs</span>
                                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 text-xs rounded-full">OAuth</span>
                                    <span className="bg-blue-500 text-white px-3 py-1 text-xs rounded-full">TailwindCSS</span>
                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 text-xs rounded-full">MongoDB</span>
                                    <span className="bg-gray-500/20 text-gray-300 px-3 py-1 text-xs rounded-full">Express.js</span>
                                    <span className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full">+4</span>
                                </div>
                            </CardItem>
                            <div className="flex justify-start gap-2 items-center mt-6">
                                {/* Live Demo */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://car-doctor-nextjs-nu.vercel.app/"
                                    target="__blank"
                                    className="flex items-center gap-2 bg-[#ff0033] px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </CardItem>
                                {/* GitHub */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://github.com/MasadRayan/MotorFix"
                                    target="__blank"
                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium"
                                >
                                    <FaGithub /> GitHub
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                </div>

            </div>
        </section>
    );
};

export default ProjectSection;