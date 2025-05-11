import React, { useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import Depth1 from "./sections/depth1";
import Depth2 from "./sections/depth2";

import "./index.css";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);

      const startColor = [0, 191, 255];  // light ocean blue
      const endColor = [0, 0, 20];       // deep ocean dark

      const interpolated = startColor.map((start, i) =>
        Math.round(start + (endColor[i] - start) * progress)
      );

      const newColor = `rgb(${interpolated.join(",")})`;

      document.body.style.backgroundColor = newColor;
      document.body.style.transition = "background-color 0.5s linear";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <div className="spacer" />
      <Depth1 />
      <div className="spacer" />
      <Depth2 />
      <div className="spacer" />
    </>
  );
}

export default App;
