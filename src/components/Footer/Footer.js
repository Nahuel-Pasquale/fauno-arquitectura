import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  width: 100%;
  height: 8vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 640px) {
    height: 12vh;
  }
`;

const ContactFooter = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SocialFooter = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RightsFooter = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContactText = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
  font-family: var(--tertiary-font);
  @media screen and (max-width: 640px) {
    font-size: 0.75rem;
  }
`;

const FooterLink = styled.a`
  color: white;
  font-size: 1.1rem;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`;

const RightsText = styled.p`
  color: white;
  font-size: 1rem;
  text-align: center;
  font-family: var(--tertiary-font);
  @media screen and (max-width: 640px) {
    font-size: 0.75rem;
  }
`;
const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <ContactFooter>
          <ContactText>Bs. As. Argentina | (+54) 123456789</ContactText>
        </ContactFooter>
        <SocialFooter>
          <FooterLink href="https://www.facebook.com/faunoarquitectura/">
            <FontAwesomeIcon icon={faFacebook} />
          </FooterLink>
          <FooterLink href="https://www.instagram.com/faunoarquitectura/">
            <FontAwesomeIcon icon={faInstagram} />
          </FooterLink>
          <FooterLink href="https://ar.pinterest.com/somosfauno/_created/">
            <FontAwesomeIcon icon={faPinterest} />
          </FooterLink>
        </SocialFooter>
        <RightsFooter>
          <RightsText>
            © 2022 Fauno Arquitectura. All rights reserved.
          </RightsText>
        </RightsFooter>
      </FooterContainer>
    </div>
  );
};

export default Footer;
