import Particles from "@/components/Particles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="">
      {/* Full Background Particles */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Page Content */}
      <div className="relative  text-white font-funnel">
        <Navbar />
        {/* Your other components go here */}
        <div className="container mx-auto  ">
          <HeroSection></HeroSection>
        </div>
      </div>
    </div>
  );
}
