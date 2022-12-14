import React, {
  useEffect, useRef, useState,
} from 'react';
import { motion } from 'framer-motion';
import ReactHowler from 'react-howler';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  LandingComponentWrapper,
  LandingComponentBackground, LandingComponentContentWrapper,
  GoToTheDetailsButton,
} from 'styled/landingComponent';

import { InitializingPanelTextWrapper, InitializingPanelTextContainer } from 'styled/landingComponent/initializingPanel';

import GlitchHeader from './glitchHeader';

interface LandingComponentInterface{
  detailsVisible: boolean,
  toggleDetailsVisible: (newState: boolean) => void
}

const LandingComponent:React.FC<LandingComponentInterface> = ({ detailsVisible, toggleDetailsVisible } : LandingComponentInterface) => {
  const [isHeaderVisible, toggleIsHeaderVisible] = useState<boolean>(false);
  const [isSoundPlaying, toggleIsSoundPlaying] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.play();
      setTimeout(() => toggleIsHeaderVisible(true), 6800);
    }
  }, []);

  useEffect(() => {
    if (isSoundPlaying) toggleDetailsVisible(true);
  }, [isSoundPlaying]);

  return (
    <LandingComponentWrapper className="block-center">
      <LandingComponentBackground ref={videoRef} muted loop>
        <source src="LandingComponentVideo.mp4" type="video/mp4" />
      </LandingComponentBackground>
      <ReactHowler
        src="party_sound_1.mp3"
        playing={!isSoundPlaying}
        onEnd={() => toggleIsSoundPlaying(!isSoundPlaying)}
      />
      <ReactHowler src="party_sound_2.mp3" loop playing={isSoundPlaying} />
      <LandingComponentContentWrapper className="block-center" isDark={!isHeaderVisible}>
        {isHeaderVisible ? (
          <>
            <GlitchHeader isPlaying={isSoundPlaying} />
            {detailsVisible ? (
              <GoToTheDetailsButton
                type="button"
                onClick={() => window.scroll({
                  top: 750,
                  behavior: 'smooth',
                })}
              >
                <ExpandMoreIcon style={{ color: 'inherit', fontSize: 'inherit' }} />
              </GoToTheDetailsButton>
            ) : null }
          </>
        ) : (
          <InitializingPanelTextWrapper className="block-center">

            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1.0],
              }}
              transition={{
                duration: 0.4,
                delay: 1.45,
              }}
            >
              <InitializingPanelTextContainer className="block-center">
                My dear,
              </InitializingPanelTextContainer>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1.0],
              }}
              transition={{
                duration: 0.4,
                delay: 3.45,
              }}
            >
              <InitializingPanelTextContainer className="block-center">
                I would really love
              </InitializingPanelTextContainer>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1.0],
              }}
              transition={{
                duration: 0.4,
                delay: 5.45,
              }}
            >
              <InitializingPanelTextContainer className="block-center">
                to invite you to my
              </InitializingPanelTextContainer>
            </motion.div>
          </InitializingPanelTextWrapper>
        )}
      </LandingComponentContentWrapper>
    </LandingComponentWrapper>
  );
};

export default LandingComponent;
