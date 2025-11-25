import GooeyNav from '@/components/GooeyNav';
import React from 'react';

const Navbar = () => {

    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ];


    return (
        <div className="container mx-auto">
            <div style={{ height: '', position: 'relative' }}>
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
        </div>
    );
};

export default Navbar;