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