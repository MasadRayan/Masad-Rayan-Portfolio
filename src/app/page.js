import Particles from "@/components/Particles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ClickSpark from "@/components/ClickSpark";
import CareerObjective from "./components/CareerObjective";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import EducationJourney from "./components/EducationJourny";

export default function Home() {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {/* Your content here */}
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
            <CareerObjective></CareerObjective>
            <SkillSection></SkillSection>
            <ProjectSection></ProjectSection>
            <EducationJourney></EducationJourney>
          </div>
        </div>
      </div>
    </ClickSpark>

  );
}
