import styled from "styled-components";

export const InitializingPanelContainer = styled.section`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background: ${(props) => props.theme.background};
    text-align: center;
`;

export const InitializingPanelButton = styled.button`
    background: none;
    border: none;
    border-radius: 50px;
    padding: 40px;
    position: relative;
    top: 20vh;
    color: ${(props) => props.theme.color};
    font-size: 9em;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;

export const InitializingPanelTextWrapper = styled.section`
    width: 100%;
    position: relative;
    top: 16vh;
`;

export const InitializingPanelTextContainer = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.7em;
    letter-spacing: 0.04em;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color};
    margin-bottom: 3vh;

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
        font-size: 1.9em;
    }
`;