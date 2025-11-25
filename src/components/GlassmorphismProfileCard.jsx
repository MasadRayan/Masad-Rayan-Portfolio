"use client";
import Image from "next/image";
import React, { useRef } from "react";

const GlassmorphismProfileCard = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTransform = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="w-full flex justify-center mt-16">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        className="
          relative
          w-[320px] 
          p-6 
          rounded-3xl 
          bg-linear-to-br from-[#2a2a2a]/50 to-[#1a1a1a]/50
          backdrop-blur-xl 
          border border-white/10
          shadow-lg
          cursor-pointer
          transition-transform duration-300
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Floating glowing borders */}
        <div className="absolute -inset-1 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-50 animate-tilt pointer-events-none"></div>

        {/* Profile Image */}
        <div className="flex justify-center mb-4 relative z-10">
          <Image
            src="/masad.jpg"
            alt="profile"
            width={100}
            height={100}
            className="object-cover rounded-full border-4 border-white/30 shadow-xl"
          />
        </div>

        {/* Name & Role */}
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-semibold text-white">
            Masad Rayan
          </h2>
          <p className="text-white/70 mt-1 text-sm">Full Stack Developer</p>
        </div>

        {/* Description */}
        <p className="text-center text-white/50 mt-3 text-sm relative z-10">
          Crafting modern, scalable, and secure web applications with passion for clean UI.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-5 relative z-10">
          <a
            href="#"
            className="px-4 py-2 bg-white/20 text-white rounded-xl border border-white/30 hover:bg-white/30 transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition"
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismProfileCard;
