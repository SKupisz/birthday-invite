import styled from "styled-components";

interface BirthdayGiftsGiftContainerInterface {
    isLink: boolean
}

export const BirthdayGiftsContainer = styled.section`
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    text-shadow: ${(props) => props.theme.textShadow};
    min-height: 100vh;
    height: fit-content;
`;

export const BirthdayGiftsHeader = styled.header`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.3em;
    letter-spacing: 0.04em;
    margin-bottom: 4vh;
    position: relative;
    top: 1vh;
`;

export const BirthdayGiftsModeContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: center;

    & > a{
        color: inherit;
    }
`;

export const BirthdayGiftsModeChooser = styled.button`
    width: calc(100% - 30px);
    padding: 10px;
    min-height: 20vh;
    line-height: 20vh;
    display: block;
    margin: 0px auto 10px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em;
    font-family: inherit;
    color: inherit;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: filter 0.4s;
    background: ${(props) => props.theme.helperBackground};

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        width: calc(95% - 30px);
        font-size: 1.4em;
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 30px);
        font-size: 1.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(45% - 30px);
        display: inline-block;
        vertical-align: top;
        margin: 0px 5px;

    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 30px);
        font-size: 2.1em;
    }

`;

export const BirthdayGiftsGiftContainer = styled.div<BirthdayGiftsGiftContainerInterface>`
    color: inherit !important;
    width: calc(100% - 20px);
    padding: 10px;
    text-align: left;
    text-indent: 0.2em;
    font-size: 1.1em;
    letter-spacing: 0.04em;

    ${(props) => props.isLink ? `
        text-decoration: underline;
        cursor: pointer; 
        transition: all 0.4s;

        &:hover{
            filter: brightness(70%);
        }
    `: null}

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.8em;
    }
`;
