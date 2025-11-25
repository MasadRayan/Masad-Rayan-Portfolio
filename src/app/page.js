import Particles from "@/components/Particles";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
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
      <div className="relative z-10">
        <Navbar />
        {/* Your other components go here */}
      </div>
    </div>
  );
}
