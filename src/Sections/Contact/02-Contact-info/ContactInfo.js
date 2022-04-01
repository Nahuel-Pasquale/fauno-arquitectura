import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const ContactInfoSectionUI = styled.div`
  width: 45%;
  height: 100%;
  background-color: rgba(0, 0, 0, 95);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

const ContactInfoContainer = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 620px) {
    width: 70%;
    margin-left: 1rem;
  }
`;

const ContactInfoTitle = styled.div`
  color: white;
  font-size: 3rem;
  font-family: var(--primary-font);
  letter-spacing: 0.2rem;
  @media screen and (max-width: 620px) {
    font-size: 1.7rem;
  }
`;

const ContactInfoParagraphContainer = styled.div`
  color: rgba(255, 255, 255, 0.6);
  padding-top: 1.8rem;
  @media screen and (max-width: 620px) {
    padding-top: 1.3rem;
  }
`;
const ContactInfoParagraph = styled.p`
  font-size: 1.18rem;
  font-weight: 100;
  font-family: var(--tertiary-font);
  line-height: 2.2rem;
  @media screen and (max-width: 620px) {
    font-size: 1rem;
  }
`;

const SocialSectionContainer = styled.div`
  width: 60%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  @media screen and (max-width: 620px) {
    width: 65%;
    padding-top: 2rem;
    margin-left: -0.7rem;
  }
`;

const SocialMediaContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SocialMediaLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.4rem;
  margin-left: 5%;
  @media screen and (max-width: 620px) {
    font-size: 1.3rem;
  }
`;

const FollowUsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%;
  height: 10%;
  margin-top: 0.2rem;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.4);
`;

const FollowUsSpan = styled.span`
  width: 12%;
  height: 10%;
  margin-top: 1.1vh;
  margin-right: 1vh;
  background-color: rgba(255, 255, 255, 0.4);
`;

const ContactInfo = () => {
  return (
    <>
      <ContactInfoSectionUI>
        <ContactInfoContainer>
          <ContactInfoTitle>
            <strong>Contactanos</strong>
          </ContactInfoTitle>
          <ContactInfoParagraphContainer>
            <ContactInfoParagraph>
              ¿Tenés un proyecto en mente?
            </ContactInfoParagraph>
            <ContactInfoParagraph>
              Nosotros te ayudamos a hacerlo realidad
            </ContactInfoParagraph>
          </ContactInfoParagraphContainer>
        </ContactInfoContainer>
        <SocialSectionContainer>
          <SocialMediaContainer>
            <SocialMediaLink href="https://www.facebook.com/faunoarquitectura">
              <FontAwesomeIcon icon={faFacebook} />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.instagram.com/faunoarquitectura">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialMediaLink>
            <SocialMediaLink href="https://ar.pinterest.com/somosfauno/_created/">
              <FontAwesomeIcon icon={faPinterest} />
            </SocialMediaLink>
          </SocialMediaContainer>
          <FollowUsContainer>
            <FollowUsSpan />
            <p>Follow us</p>
          </FollowUsContainer>
        </SocialSectionContainer>
      </ContactInfoSectionUI>
    </>
  );
};

export default ContactInfo;
