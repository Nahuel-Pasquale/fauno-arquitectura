import React from "react";
import styled from "styled-components";
import {
  AboutFaunoContainer,
  AboutFaunoImg,
  AboutFaunoImgOverlay,
  FootPage,
} from "../02-About-fauno/About-fauno";

const WorkInfo = styled.div`
  width: 50%;
  height: 100vh;
`;

export const Work = () => {
  return (
    <AboutFaunoContainer flexDirection="row-reverse">
      <AboutFaunoImg image="images/IMAGEN01.jpg">
        <AboutFaunoImgOverlay />
      </AboutFaunoImg>
      <WorkInfo></WorkInfo>
    </AboutFaunoContainer>
  );
};
