import { createGlobalStyle } from "styled-components";
import bikoRegular from "../assets/Biko_Regular.otf";
import geosansLight from "../assets/GeosansLight.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: biko;
        src: url(${bikoRegular}) ;
    }
    @font-face {
        font-family: geosans;
        src: url(${geosansLight});
    }

    h1,h2,h3,h4,h5,h6{
        font-weight:500;
        line-height: 1.1;
    }

    :root{
       --primary-font: biko ;
       --secondary-font: geosans;
       --tertiary-font: "josefin Sans", sans-serif;
    }

    *{
        transition:1s;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
    scroll-behavior: smooth;
    }
    a{
        text-decoration: none;
        color: white;
    }
    a:hover{
        text-decoration:underline;
    }
`;
