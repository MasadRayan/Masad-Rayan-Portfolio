"use client";
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const GotoTopButton = () => {
    
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleGotoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={handleGotoTop}
                    className='px-4 py-4 bg-[#FF500599] text-white rounded-xl fixed bottom-5 right-5 z-999'
                >
                    <FaArrowUp size={16} />
                </button>
            )}
        </>
    );
};

export default GotoTopButton;
