"use client";
import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiClipboard } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    
    return (
        <div id='contact' className='mt-30 mb-10 md:mt-30'>
            <h1 className='text-center  mb-10'>
                <span className="text-5xl md:text-5xl  font-bold bg-linear-to-r from-[#FF5005] via-[#FF5005] to-[#F7C948] bg-clip-text text-transparent">
                    Connect With Me
                </span>
            </h1>

        </div>
    );
};

export default Contact;