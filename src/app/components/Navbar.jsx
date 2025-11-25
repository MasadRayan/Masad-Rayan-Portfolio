import GooeyNav from '@/components/GooeyNav';
import React from 'react';

const Navbar = () => {

    const items = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];


    return (
        <div className=" mx-10 sticky top-0 z-100  ">
            <nav className='flex justify-between items-center py-5 '>
                {/* icon */}
                <div>
                    <p className='text-xl font-bold font-funnel text-white' >Masad Rayan</p>
                </div>
                {/* links */}
                <div className='hidden md:block' style={{ height: '', position: 'relative', fontFamily: 'Funnel Display' }}>
                    <GooeyNav
                        items={items}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />
                </div>
                {/* btn */}
                <div>
                    <button>
                        <span className='text-white btn bg-[#FF5005] px-4 py-2 rounded-lg font-funnel font-semibold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>Resume</span>
                    </button>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;