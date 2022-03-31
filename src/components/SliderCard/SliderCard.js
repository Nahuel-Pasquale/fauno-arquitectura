import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 640px) {
    background-position: center;
  }
`;

const CardOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CardContainer = styled.div`
  position: absolute;
  left: 10%;
  top: 40%;
  width: 50%;
  color: #fff;
  @media screen and (max-width: 640px) {
    width: 100%;
    left: 10%;
  }
`;

const CardTitle = styled.h2`
  font-family: var(--primary-font);
  font-size: 4.5rem;
  text-shadow: 1px 1px 0 rgb(0 0 0 / 75%);
  font-weight: lighter;
  @media screen and (max-width: 640px) {
    font-size: 3.2rem;
    width: 80%;
  }
`;

const CardSubtitle = styled.h3`
  font-family: var(--secondary-font);
  letter-spacing: 0.2rem;
  font-size: 1.4rem;
  margin-top: 1.2rem;
  margin-bottom: 0.7rem;
  @media screen and (max-width: 640px) {
    font-size: 1.3rem;
    width: 90%;
  }
`;

const SliderCard = ({ image }) => {
  return (
    <Hero img={image.img}>
      <CardOverlay>
        <CardContainer>
          <CardTitle>{image.title}</CardTitle>
          <CardSubtitle>{image.subtitle}</CardSubtitle>
        </CardContainer>
      </CardOverlay>
    </Hero>
  );
};

export default SliderCard;
