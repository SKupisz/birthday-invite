import styled from "styled-components";

interface LandingComponentTextGlitchComponentInterface{
    color?: string
}

interface LandingComponentContentWrapperInterface {
    isDark: boolean
}

export const LandingComponentWrapper = styled.section`
    width: 100%;
    height: fit-content;
    max-height: 100vh;
    overflow-y: hidden;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    position: relative;
    top: 0vh;
    background: ${(props) => props.theme.background};
`;

export const LandingComponentBackground = styled.video`
    height: 100%;
    max-height: 100vh;
    width: auto;
    position: relative;
    top: 0vh;
    margin: 0;
    padding: 0;
    overflow: hidden;

    & > source {
        max-width: 100%;
        overflow: hidden !important;
    }
    

    @media screen and (min-width: 1024px){
        width: 100%;
        height: auto;
        max-height: fit-content;
        position: relative;
        top: 0vh;
        margin: 0;
        padding: 0;
        & > source {
            max-width: auto;
            overflow: auto;
        }
    }
`;

export const LandingComponentContentWrapper = styled.div<LandingComponentContentWrapperInterface>`
    width: calc(100% - 20px);
    min-height: calc(100vh - 20px);
    padding: 10px;
    text-align: center;
    background: rgba(0,0,0,${(props) => props.isDark ? ".9" : ".3"});
    position: absolute;
    top: 0;
    transition: background 1.4s;
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

export const GoToTheDetailsButton = styled.button`
    border: none;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    background: transparent;
    font-size: 4.5em;
    padding: 20px 40px;
    text-align: center;
    position: relative;
    top: 40vh;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;