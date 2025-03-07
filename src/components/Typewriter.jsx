import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/golden-theme.css';

// Wrap your explanation in a single-line comment above the return
// The "typewriter" class and the "crystal-effect" class are combined to give both the typed and shimmering glow effect.
const TypewriterText = () => {
  return (
    <div className="typewriter crystal-effect">
      <Typewriter
        options={{
          strings: [
            
            'Developer',
            'Data Analyst',
            'SQL Expert'
          ],
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />
    </div>
  );
};

export default TypewriterText;
