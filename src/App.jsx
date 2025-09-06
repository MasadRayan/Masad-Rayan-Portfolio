import React from 'react';
import Hero from './sections/hero';
import { StarsCanvas } from './components/StarsCanvas/StarsCanvas';
import ShowcaseSectioon from './sections/ShowcaseSectioon';
import Navbar from './components/Navbar/Navbar';
import ExperienceSection from './sections/ExperienceSection';


const App = () => {
  return (
    <>
      <div className="relative  ">
        {/* Background Stars */}
        <StarsCanvas />

      </div>
      {/*Portfolio Content */}
      <Navbar />
      <Hero />
      <ShowcaseSectioon />
      <ExperienceSection />
    </>
  );
};

export default App;