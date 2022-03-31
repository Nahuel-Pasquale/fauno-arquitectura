import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const FadeOut = keyframes`
  0% {
    opacity: 1;
    overflow: hidden;
  }
  100% {
    opacity: 0;
    overflow: hidden;
    z-index: -9999;
    display: none;
  }
`;
const LogoOverlayUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-color: #080d15;
  -webkit-animation: ${FadeOut} 1.5s ease-out 1.5s both;
  -webkit-transition: 1.5s ease-out 1.5s both;
  -moz-transition: 1.5s ease-out 1.5s both;
  -ms-transition: 1.5s ease-out 1.5s both;
  -o-transition: 1.5s ease-out 1.5s both;
  -webkit-animation: ${FadeOut} 1s ease-out 1s both;
  -moz-animation: ${FadeOut} 1s ease-out 1s both;
  -ms-animation: ${FadeOut} 1s ease-out 1s both;
  -o-animation: ${FadeOut} 1s ease-out 1s both;
  transition: 1.5s ease-out 1.5s both;
  animation: ${FadeOut} 1.5s ease-out 1.5s both;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  animation-name: ${FadeOut};
`;

const OverlayImg = styled.img`
  width: 20%;
  -webkit-animation: ${FadeOut} 1s ease-out 1s both;
  -moz-animation: ${FadeOut} 1s ease-out 1s both;
  -ms-animation: ${FadeOut} 1s ease-out 1s both;
  -o-animation: ${FadeOut} 1s ease-out 1s both;
  animation: ${FadeOut} 1.5s ease-out 1.5s both;
  -webkit-transition: 1.5s ease-out 1.5s both;
  -moz-transition: 1.5s ease-out 1.5s both;
  -ms-transition: 1.5s ease-out 1.5s both;
  -o-transition: 1.5s ease-out 1.5s both;
  transition: 1.5s ease-out 1.5s both;
  animation-name: ${FadeOut};
  @media screen and (max-width: 640px) {
    width: 80%;
  }
`;

const LogoOverlay = () => {
  const [shown, setShown] = useState(true);
  useEffect(() => {
    let interval;
    if (shown) {
      interval = setTimeout(() => {
        setShown(false);
      }, 3100);
    }
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      {shown && (
        <LogoOverlayUI>
          <OverlayImg src="images/isologo.png" alt="Logo fauno" />
        </LogoOverlayUI>
      )}
    </>
  );
};

export default LogoOverlay;
