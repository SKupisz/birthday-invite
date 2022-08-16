import {createGlobalStyle} from "styled-components";

export const BirthdayGlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: #111;
    }

    
    body::-webkit-scrollbar{
        background: #111;
    }
    body::-webkit-scrollbar-thumb{
        background: #0895E6;
        border-radius: 10px;
    }

    .block-center{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const BirthdayStyles = {
    background: "#111",
    color: "#0895E6",
    fontFamily: "Mohave, sans-serif",
    helperBackground: "rgba(24,87,255,.35)",
    textShadow: "3px 3px 4px rgba(0,0,0,.15)",
    boxShadow: "4px 4px 4px rgba(0,0,0,.2)"
};