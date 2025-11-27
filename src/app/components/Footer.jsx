import React from "react";
import Image from "next/image";

const Footer = () => {
  const socialImgs = [
    {
      name: "Instagram",
      imgPath: "/logos/insta.png",
      link: "https://www.instagram.com/masad_rayan/",
    },
    {
      name: "Facebook",
      imgPath: "/logos/fb.png",
      link: "https://www.facebook.com/masad.rayan.2024",
    },
    {
      name: "X (Twitter)",
      imgPath: "/logos/x.png",
      link: "https://x.com/Masad_Rayan",
    },
    {
      name: "LinkedIn",
      imgPath: "/logos/linkedin.png",
      link: "https://www.linkedin.com/in/masad-rayan/",
    },
  ];

  return (
    <footer className="relative z-'999' bg-transparent backdrop-blur-lg mt-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Copyright - Left */}
          <div className="text-center md:text-left">
            <p className="text-neutral-400 text-sm md:text-base">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-semibold">Masad Rayan</span>
              <br className="md:hidden" />
              <span className="hidden md:inline">. </span>
              All rights reserved.
            </p>
          </div>

          {/* Social Icons - Center */}
          <div className="flex justify-center items-center gap-4">
            {socialImgs.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group relative"
                aria-label={social.name}
              >
                <div className="h-12 w-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:shadow-orange-500 hover:shadow-2xl hover:bg-[#FF5005] transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={social.imgPath}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Message - Right */}
          <div className="text-center md:text-right">
            <p className="text-neutral-400 text-sm md:text-base">
              Let's connect and create{" "}
              <span className="text-transparent bg-linear-to-r from-[#FF5005] to-[#F7C948] bg-clip-text font-semibold">
                something amazing
              </span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <p className="text-center text-neutral-500 text-xs md:text-sm">
            Designed & Built by <span className="text-white font-black">Masad Rayan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;