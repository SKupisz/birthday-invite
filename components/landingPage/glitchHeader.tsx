import React from 'react';
import { motion, TransitionDefinition } from 'framer-motion';

import { LandingComponentTextGlitchComponent } from 'styled/landingComponent';

interface GlitchHeaderInterface{
    isPlaying: boolean
}

const GlitchHeader:React.FC<GlitchHeaderInterface> = ({ isPlaying } : GlitchHeaderInterface) => {
  const glitchDuration:TransitionDefinition = 0.45;

  return (
    <LandingComponentTextGlitchComponent className="block-center">
      <motion.div
        animate={{
          scale: [1.0, 1.1, 1.0],
          rotate: [0, -2, 0, 2, 0],
          rotateX: isPlaying ? [0, 0] : [0, 180, 360, 180, 0],
          skewY: isPlaying ? [0, 2, 0] : [0, 2, 4, 2, 0],
        }}
        transition={{
          duration: glitchDuration,
          repeat: 'Infinity',
        }}
      >
        <motion.span
          animate={{ x: isPlaying ? [0, 2.5, 0] : [0, 0] }}
          transition={{
            duration: glitchDuration,
            repeat: 'Infinity',
          }}
          className="block-center"
          style={{ color: 'red' }}
        >
          Birthday party
        </motion.span>
        <motion.span
          animate={{ y: isPlaying ? [0, 2.5, 0] : [0, 0] }}
          transition={{
            duration: glitchDuration,
            repeat: 'Infinity',
          }}
          className="block-center"
          style={{ color: 'purple' }}
        >
          Birthday party
        </motion.span>
        <motion.span
          animate={{ y: isPlaying ? [0, 4, 0] : [0, 0] }}
          transition={{
            duration: glitchDuration,
            repeat: 'Infinity',
          }}
          className="block-center"
          style={{ color: 'green' }}
        >
          Birthday party
        </motion.span>
        <motion.span
          animate={{ scale: isPlaying ? [1, 0.98, 1] : [1, 1] }}
          transition={{
            duration: glitchDuration,
            repeat: 'Infinity',
          }}
          className="block-center"
        >
          Birthday party
        </motion.span>
      </motion.div>

    </LandingComponentTextGlitchComponent>
  );
};

export default GlitchHeader;
