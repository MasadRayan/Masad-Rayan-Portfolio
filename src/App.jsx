import React from 'react';
import Hero from './sections/hero';
import { StarsCanvas } from './components/StarsCanvas/StarsCanvas';
import ShowcaseSectioon from './sections/ShowcaseSectioon';


const App = () => {
  return (

    
    <div className="relative w-full min-h-screen ">
      {/* Background Stars */}
      <StarsCanvas />

      {/*Portfolio Content */}
      <Hero />
      <ShowcaseSectioon />
    </div>
  );
};

export default App;