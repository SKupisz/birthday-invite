import React, { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';

import {
  LandingComponentWrapper,
  LandingComponentBackground, LandingComponentContentWrapper,
} from 'styled/landingComponent';

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
      <LandingComponentContentWrapper className="block-center">
        {isHeaderVisible ? <GlitchHeader isPlaying={isSoundPlaying} /> : null}
      </LandingComponentContentWrapper>
    </LandingComponentWrapper>
  );
};

export default LandingComponent;
