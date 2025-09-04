import React from 'react';
import Hero from './sections/hero';
import { StarsCanvas } from './components/StarsCanvas/StarsCanvas';


const App = () => {
  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Background Stars */}
      <StarsCanvas />

      {/* Your Portfolio Content */}
      <Hero />
    </div>
  );
};

export default App;