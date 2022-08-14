import React, {useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import ReactHowler from 'react-howler';

import { LandingComponentWrapper, LandingComponentTextGlitchComponent,
    LandingComponentBackground, LandingComponentContentWrapper } from 'styled/landingComponent';

const LandingComponent:React.FC = () => {

    const videoRef = useRef<HTMLVideoElement>();
    const soundIntroRef = useRef<HTMLElement>();
    const soundRef = useRef<HTMLElement>();

    const glitchDuration = 0.45;

    const [isSoundPlaying, toggleIsSoundPlaying] = useState<boolean>(false);

    useEffect(() => {
        videoRef.current.play();
    }, []);

return <LandingComponentWrapper className="block">
    <LandingComponentBackground ref={videoRef} muted loop>
        <source src="LandingComponentVideo.mp4" type="video/mp4"/>
    </LandingComponentBackground>
    <ReactHowler src="party_sound_1.mp3" ref={soundIntroRef} playing={!isSoundPlaying}
    onEnd={() => toggleIsSoundPlaying(!isSoundPlaying)}/>
    <ReactHowler src="party_sound_2.mp3" ref={soundRef} loop playing={isSoundPlaying}/>
    <LandingComponentContentWrapper className="block-center">
        <LandingComponentTextGlitchComponent className="block-center">
            <motion.div 
        animate={{ scale: [1.0, 1.1, 1.0],
            rotate: [0, -2, 0, 2, 0],
            rotateX: isSoundPlaying ? [0, 0] :[0, 180, 360, 180, 0] }}
        transition = {{
            duration: glitchDuration,
            repeat: "Infinity"
        }}>
            <motion.span animate = {{x: [0,2,0]}}
            transition={{
                duration: glitchDuration,
                repeat: "Infinity"
            }}
            className="block-center" style={{color: "red"}}>
                Birthday party
            </motion.span>
            <motion.span animate = {{y: [0,2,0]}}
            transition={{
                duration: glitchDuration,
                repeat: "Infinity"
            }}
            className="block-center" style={{color: "purple"}}>
                Birthday party
            </motion.span>
            <motion.span animate = {{scale: [1, 0.98, 1]}}
            transition={{
                duration: glitchDuration,
                repeat: "Infinity"
            }}
            className="block-center">
                Birthday party
            </motion.span>
            </motion.div>
            
        </LandingComponentTextGlitchComponent>
    </LandingComponentContentWrapper>
</LandingComponentWrapper>};

export default LandingComponent;
