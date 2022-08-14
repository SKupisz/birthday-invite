import styled from "styled-components";

interface LandingComponentTextGlitchComponentInterface{
    color?: string
}

export const LandingComponentWrapper = styled.section`
    width: 100%;
    height: fit-content;
    min-height: 120vh;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    position: relative;
    top: 0vh;
    background: ${(props) => props.theme.background};
`;

export const LandingComponentTextGlitchComponent = styled.div<LandingComponentTextGlitchComponentInterface>`
    width: fit-content;
    height: fit-content;
    font-size: 2.2em;
    text-transform: uppercase;
    color: ${(props) => props.color !== undefined ? props.color : props.theme.color};
    position: relative;
    top: 16vh;
    text-shadow: ${(props) => props.theme.textShadow};
    line-height: 0;

    @media screen and (min-width: 375px){
        font-size: 2.7em;
    }

    @media screen and (min-width: 425px){
        font-size: 3.4em;
    }

    @media screen and (min-width: 768px){
        font-size: 4.2em;
        top: 23vh;
    }

    @media screen and (min-width: 1024px){
        font-size: 6.2em;
    }
`;  

export const LandingComponentBackground = styled.video`
    width: 100%;
    height: auto;
    position: relative;
    top: 0vh;
    margin: 0;
    padding: 0;
`;

export const LandingComponentContentWrapper = styled.div`
    width: calc(100% - 20px);
    min-height: calc(120vh - 20px);
    padding: 10px;
    text-align: center;
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
`;