import React from "react";
import styled from "styled-components";

const IntroContainer = styled.section`
  background: url(images/fondo-about.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  width: 100%;
  height: 100vh;
`;

export const Intro = () => {
  return (
    <div>
      <IntroContainer>Hola</IntroContainer>
    </div>
  );
};
