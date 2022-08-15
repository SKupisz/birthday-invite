import React, { useEffect, useRef, useState } from 'react';
import {motion} from "framer-motion";
import ReactHowler from 'react-howler';

import {
  LandingComponentWrapper,
  LandingComponentBackground, LandingComponentContentWrapper,
} from 'styled/landingComponent';

import { InitializingPanelTextWrapper, InitializingPanelTextContainer } from 'styled/landingComponent/initializingPanel';

import GlitchHeader from './glitchHeader';

interface LandingComponentInterface{
  toggleDetailsVisible: (newState: boolean) => void
}

const LandingComponent:React.FC<LandingComponentInterface> = ({toggleDetailsVisible} : LandingComponentInterface) => {
  const [isHeaderVisible, toggleIsHeaderVisible] = useState<boolean>(false);
  const [isSoundPlaying, toggleIsSoundPlaying] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>();
  const soundIntroRef = useRef<HTMLElement>();
  const soundRef = useRef<HTMLElement>();

  useEffect(() => {
    videoRef.current.play();
    setTimeout(() => toggleIsHeaderVisible(true), 6800);
  }, []);

  useEffect(() => {
    if(isSoundPlaying) toggleDetailsVisible(true);
  }, [isSoundPlaying]);

  return (
    <LandingComponentWrapper className="block-center">
      <LandingComponentBackground ref={videoRef} muted loop>
        <source src="LandingComponentVideo.mp4" type="video/mp4" />
      </LandingComponentBackground>
      <ReactHowler
        src="party_sound_1.mp3"
        ref={soundIntroRef}
        playing={!isSoundPlaying}
        onEnd={() => toggleIsSoundPlaying(!isSoundPlaying)}
      />
      <ReactHowler src="party_sound_2.mp3" ref={soundRef} loop playing={isSoundPlaying} />
      <LandingComponentContentWrapper className="block-center" isDark={!isHeaderVisible}>
        {isHeaderVisible ? <GlitchHeader isPlaying={isSoundPlaying} /> : <InitializingPanelTextWrapper className="block-center">
        
          <motion.div
          initial={{scale: 0}}
          animate = {{
            scale: [0, 1.0]
          }}
          transition={{
            duration: 0.4,
            delay: 1.45
          }}>
            <InitializingPanelTextContainer className="block-center">
              My dear,
            </InitializingPanelTextContainer>
          </motion.div>
          <motion.div
          initial={{scale: 0}}
          animate = {{
            scale: [0, 1.0]
          }}
          transition={{
            duration: 0.4,
            delay: 3.45
          }}>
            <InitializingPanelTextContainer className="block-center">
            I would really love
            </InitializingPanelTextContainer>
          </motion.div>
          <motion.div
          initial={{scale: 0}}
          animate = {{
            scale: [0, 1.0]
          }}
          transition={{
            duration: 0.4,
            delay: 5.45
          }}>
            <InitializingPanelTextContainer className="block-center">
            to invite you to my
            </InitializingPanelTextContainer>
          </motion.div>
        </InitializingPanelTextWrapper>}
      </LandingComponentContentWrapper>
    </LandingComponentWrapper>
  );
};

export default LandingComponent;
