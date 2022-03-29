import React from "react";
import styled from "styled-components";

export const AboutFaunoContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 160vh;
  }
`;

export const AboutFaunoImg = styled.div`
  width: 50%;
  height: 100%;
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    background-size: 350%;
    width: 100%;
    height: 50%;
  }
`;

export const AboutFaunoImgOverlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.7);
  :hover {
    background-color: transparent;
  }
`;

const AboutFaunoInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50%;
  }
`;

const H2 = styled.h2`
  font-size: 3.5rem;
  font-family: "Josefin Sans";
  width: 50%;
  margin-left: 15%;
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
`;
export const P = styled.p`
  font-family: "Josefin Sans";
  width: 70%;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin-top: 2.5%;
  margin-left: 15%;
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const FootPage = styled.div`
  margin-left: 15%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H5 = styled.h5`
  font-family: "Josefin Sans";
  margin-top: 10%;
  @media screen and (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;

export const AboutFauno = () => {
  return (
    <AboutFaunoContainer flexDirection="row">
      <AboutFaunoImg image="images/IMAGEN01.jpg">
        <AboutFaunoImgOverlay />
      </AboutFaunoImg>
      <AboutFaunoInfo>
        <H2>Sobre FAUNO</H2>
        <P fontSize="1rem" lineHeight="1.3rem">
          Contamos con la capacidad y experiencia para integrar de manera
          eficiente el diseño, la gestión, la administración y la logística para
          lograr un óptimo desarrollo de cada proceso proyectual y ejecución de
          la obra.
        </P>
        <P fontSize="1rem" lineHeight="1.3rem">
          El carárter vanguardista define nuestros trabajos en donde hacemos
          fuerte hincapié en el uso de las texturas, las líneas, la temperatura
          y las formas.
        </P>
        <P fontSize="1rem" lineHeight="1.3rem">
          Siempre comprometidos con la búsqueda constante de mejorar nuestra
          visión de la arquitectura, nuestra relación con ella y la calidad de
          vida de las personas que la habitan.
        </P>
        <FootPage>
          <H5>
            <strong>001</strong>
          </H5>

          <H5>
            <strong>ABOUT</strong>
          </H5>
        </FootPage>
      </AboutFaunoInfo>
    </AboutFaunoContainer>
  );
};
