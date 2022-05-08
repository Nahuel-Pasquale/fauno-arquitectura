import React from "react";
import styled from "styled-components";

const MapSectionContainer = styled.div`
  width: 55%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0px solid black;
`;

const MapInfoContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 620px) {
    justify-content: space-between;
  }
`;
const MapInfoContactContainer = styled.div`
  width: 30%;
  height: 60%;
  display: flex;
  padding: 0.5rem 0rem;
  justify-content: space-around;
  flex-direction: column;
  margin-left: 10%;
  font-family: var(--tertiary-font);
  @media screen and (max-width: 620px) {
    margin-left: 1.8rem;
    height: 80%;
  }
`;

const MapInfoLocationContainer = styled.div`
  width: 25%;
  height: 60%;
  padding: 0.5rem 0rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-family: var(--tertiary-font);
  @media screen and (max-width: 620px) {
    margin-left: 1.5rem;
    height: 80%;
    width: 25%;
  }
`;

const MapInfoTitle = styled.h4`
  font-size: 1.2rem;
  @media screen and (max-width: 620px) {
    font-size: 0.9rem;
  }
`;

const MapInfoParagraph = styled.p`
  font-size: 0.9rem;
  @media screen and (max-width: 620px) {
    font-size: 0.7rem;
  }
`;

const Logo = styled.div`
  width: 25%;
  height: 80%;
  background: url("images/logo1.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media screen and (max-width: 620px) {
    width: 35%;
    height: 100%;
    margin-bottom: 0.3rem;
  }
`;

const ContactMap = () => {
  return (
    <MapSectionContainer>
      <MapContainer>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.7607731018766!2d-58.271715385191406!3d-34.71121337069985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e04ce60d8d1%3A0x1b7c15986ab60196!2sLebensohn%20126%2C%20Bernal%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1652030540203!5m2!1ses!2sar"
          title="Fauno"
          allowfullscreen=""
          loading="lazy"
        />
      </MapContainer>
      <MapInfoContainer>
        <MapInfoContactContainer>
          <MapInfoTitle>
            <strong>Contacto</strong>
          </MapInfoTitle>
          <MapInfoParagraph>Tel:123456789</MapInfoParagraph>
          <MapInfoParagraph>Mail:faunoarq@gmail..com</MapInfoParagraph>
        </MapInfoContactContainer>
        <MapInfoLocationContainer>
          <MapInfoTitle>
            <strong>Donde Estamos</strong>
          </MapInfoTitle>
          <MapInfoParagraph>Quilmes,Bernal</MapInfoParagraph>
          <MapInfoParagraph>Bs. As. Argentina</MapInfoParagraph>
        </MapInfoLocationContainer>
        <Logo />
      </MapInfoContainer>
    </MapSectionContainer>
  );
};

export default ContactMap;
