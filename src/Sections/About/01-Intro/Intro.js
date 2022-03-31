import React from "react";
import styled from "styled-components";

const IntroContainer = styled.section`
  background: url(images/fondo-about.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    background-size: cover;
  }
`;
const IntroSection = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const AboutTitulos = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 25%;
  }
`;

const H2 = styled.h2`
  font-family: biko;
  font-size: 2.5rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
const H3 = styled.h3`
  font-family: "Josefin Sans";
  font-size: 2rem;
  font-weight: lighter;
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const ALink = styled.a`
  font-family: "Josefin Sans";
  color: white;
  font-weight: lighter;
`;
const H5 = styled.h5`
  font-family: "Josefin Sans";
  font-size: 1rem;
  font-weight: lighter;
  text-decoration: none;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const AboutParrafo = styled.div`
  width: 45%;
  height: 60%;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 60%;
  }
`;

export const DecorationLine = styled.span`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 2.2px;
  width: ${({ width }) => width};
  padding-bottom: 0%;
`;

const Parrafo = styled.p`
  font-family: "Josefin Sans";
  font-weight: lighter;
  font-size: 1.3rem;
  text-align: left;
  line-height: 1.5rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

export const Intro = () => {
  return (
    <div>
      <IntroContainer>
        <IntroSection>
          <AboutTitulos>
            <H2>SOMOS FAUNO</H2>
            <H3>Lo soñás, lo diseñamos, lo construimos</H3>
            <ALink href="https://www.instagram.com/faunoarquitectura/?fbclid=IwAR2eph6LvjYHN2PLNvNN-AnixIGtdKmd6W2GueZCBuKyToc8S3Aw1s4WWn0">
              <H5> {`>`} CONOCENOS </H5>
            </ALink>
          </AboutTitulos>
          <AboutParrafo>
            <DecorationLine backgroundColor="white" width="35%" />
            <Parrafo>
              Somos un estudio de arquitectura, constructora y desarrolladora
              conformada por un amplio equipo de profesionales apasionados por
              la funcionalidad, la simpleza y la luz. Vemos como una necesidad
              fundamental la precisión en las partes de cada proyecto, desde el
              trazo de la primera línea hasta el último detalle de terminación
              en la fase de ejecucion de la obra.
            </Parrafo>
          </AboutParrafo>
        </IntroSection>
      </IntroContainer>
    </div>
  );
};
