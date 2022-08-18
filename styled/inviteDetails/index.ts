import styled from "styled-components";

export const InviteDetailsContainer = styled.section`
    width: 100%;
    height: fit-content;
    min-height: 80vh;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    position: relative;

    @media screen and (min-width: 768px){
        min-height: 60vh;
    }
`;

export const InviteDetailsContainerContent = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    min-height: inherit;
    background: rgba(0,0,0,.5);
    position: relative;
    top: 0vh;
`;

export const InviteDetailsHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    letter-spacing: 0.02em;
    font-size: 2.1em;
    margin-bottom: 4vh;
    position: relative;
    top: 1vh;
    text-transform: uppercase;
    text-shadow: ${(props) => props.theme.textShadow};

    @media screen and (min-width: 425px){
        font-size: 2.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 3.2em;
    }
`;

export const InviteDetailsWrapper = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    z-index: 2;
    position: relative;
    top: 0vh;

    @media screen and (min-width: 1024px){
        width: calc(90% - 10px);
    }
`;

export const InviteDetailsPhotoContainer = styled.div`
    width: calc(20% - 20px);
    padding: 5px;
    display: block;
    margin: 10px auto;

    @media screen and (min-width: 768px){
        display: inline-block;
        vertical-align: bottom;
        margin: 0px 5px;
        width: calc(40% - 20px);
    }

    @media screen and (min-width: 1440px){
        width: calc(30% - 20px);
    }
`;

export const InviteDetailsGap = styled.div`
    width: 0;
    display: inline-block;
    vertical-align: top;

    @media screen and (min-width: 1024px){
        width: 10%;
    }

    @media screen and (min-width: 1440px){
        width: 20%;
    }
`;

export const InviteDetailsContent = styled.div`
    width: calc(100% - 20px);
    height: calc(50vh - 20px);
    min-height: fit-content;
    padding: 10px;
    padding-top: 1vh;
    display: block;
    margin: 10px auto 0px;
    background: ${(props) => props.theme.helperBackground};
    text-shadow: ${(props) => props.theme.textShadow};
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 10px;
    position: relative;

    @media screen and (min-width: 375px){
        width: calc(95% - 20px);
    }

    @media screen and (min-width: 425px){
        width: calc(75% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 30px);
        height: calc(50vh - 20px);
        padding-top: 7vh;
        display: inline-block;
        vertical-align: top;
        margin: 3vh 5px 0px;
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 30px);
        height: calc(60vh - 20px);
        padding-top: 10vh;
    }
`;

export const InviteDetailsContentHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    text-indent: 0em;
    font-size: 1.2em;
    letter-spacing: 0.04em;
    margin-bottom: 2vh;

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 1440px){
        width: calc(90% - 10px);
        font-size: 1.6em;
        text-align: left;
        text-indent: 0.5em;
    }
`;

export const InviteDetailsContentAnswer = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.05em;
    letter-spacing: 0.04em;
    margin-bottom: 2vh;

    @media screen and (min-width: 425px){
        font-size: 1.1em;
    }

    @media screen and (min-width: 768px){ 
        margin-bottom: 3vh;
        font-size: 1.2em;
    }

    @media screen and (min-width: 1440px){
        width: calc(80% - 10px);
        font-size: 1.4em;
    }
`;