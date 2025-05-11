import React, { useEffect, useState } from "react";
 
function HeroSection(){


    const[bgColor ,setBgColor] = useState('#00bff'); //light  blue color
    useEffect(()=>{
        const handleScroll =()=>{
            const scrollY =window.scrollY;
            const maxScroll = window.innerHeight * 2;
            const scrollProgress =Math.min(scrollY/maxScroll, 1);
            //interpolate between blue and the dark navy
            const r = Math.floor(0 + (0 - 0) * scrollProgress);
            const g = Math.floor(191 + (17 - 191) * scrollProgress);
            const b = Math.floor(255 + (34 - 255) * scrollProgress);
            setBgColor(`rgb(${r},${g},${b})`);
        };
        window.addEventListener('scroll', handleScroll);
        return()=>window.removeEventListener('scroll', handleScroll);
    },[]);

    return(
        <section className="hero-section" style={{ backgroundColor: bgColor }}>
            <div className="content">
                <h1>Deep Ocean Explorer</h1>
                <p>Scroll down to begin your underwater journey</p>
            </div>
        </section>
    );
}

export default HeroSection;