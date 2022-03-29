import React from "react";
import styled from "styled-components";
import {
  AboutFaunoContainer,
  AboutFaunoImg,
  AboutFaunoImgOverlay,
  FootPage,
  P,
} from "../02-About-fauno/About-fauno";

const WorkInfo = styled.div`
  width: 50%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;

const H5 = styled.h5`
  font-family: "Josefin Sans";
  margin-bottom: 10%;
  color: white;
`;

const H2 = styled.h2`
  font-size: 3.5rem;
  font-family: "Josefin Sans";
  width: 40%;
  margin-left: 15%;
  color: white;
`;

export const Work = () => {
  return (
    <AboutFaunoContainer flexDirection="row-reverse">
      <AboutFaunoImg image="images/IMAGEN01.jpg">
        <AboutFaunoImgOverlay />
      </AboutFaunoImg>
      <WorkInfo>
        <FootPage>
          {" "}
          <H5>
            <strong>002</strong>
          </H5>
          <H5>
            <strong>ABOUT</strong>
          </H5>
        </FootPage>
        <H2>el TRABAJO</H2>
        <P fontSize="1.1rem" lineHeight="1.5rem" color="white">
          {" "}
          Para nosotros es escencial la funcionalidad , así como también la
          optimización de recursos basados en la utilización de materiales de
          bajo mantenimiento, alta duración y la aplicación de sistemas que
          mejoresn la eficiencia energética. Todos estos criterios se ven
          nuevamente reflejados en la fas de construcción, en donde la rápida
          respuesta y responsabilidad en los procesos de ejecución son
          fundamentales para el correcto desarrollo de la obra.
        </P>
      </WorkInfo>
    </AboutFaunoContainer>
  );
};
