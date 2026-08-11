"use client";

import Particles from "@/components/Particles";
import { useEffect, useState } from "react";

const AdaptiveParticles = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return (
    <Particles
      {...props}
      particleCount={isMobile ? 60 : props.particleCount}
      speed={isMobile ? 0.05 : props.speed}
      particleBaseSize={isMobile ? 60 : props.particleBaseSize}
      moveParticlesOnHover={false}
      disableRotation={isMobile}
    />
  );
};

export default AdaptiveParticles;