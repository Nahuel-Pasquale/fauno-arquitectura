import React from "react";
import styled from "styled-components";
import { DecorationLine } from "../../About/01-Intro/Intro";
import { Link } from "react-router-dom";
import { projects } from "../../../data/data";
const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    margin-top: 5vh;
  }
`;

const ProjectDescription = styled.div`
  width: 35%;
  height: 75%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  @media screen and (max-width: 640px) {
    width: 70%;
    height: 40%;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2.5rem;
  font-family: var(--primary-font);
  @media screen and (max-width: 640px) {
    font-size: 1.9rem;
  }
`;

const ProjectP = styled.p`
  font-family: var(--tertiary-font);
  color: rgb(61, 61, 61);
  width: 80%;
  font-weight: lighter;
  font-size: 1.3rem;
  text-align: left;
  line-height: 1.7rem;
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
    width: 100%;
    line-height: 1.3rem;
    text-align: justify;
  }
`;

const ProjectLink = styled.a`
  width: 30%;
  height: 7%;
  background-color: black;
  text-decoration: none;
  font-family: var(--tertiary-font);
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const ProjectButton = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  margin-top: 2%;
  border: none;
  background-color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectImage = styled.div`
  width: 35%;
  height: 75%;
  background: url(images/casa-del-arbol/01.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media screen and (max-width: 640px) {
    width: 70%;
    height: 35%;
    margin-bottom: 5vh;
  }
`;

const ProjectImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;

  &:hover {
    opacity: 0;
  }
`;

const ResponsiveBtnContainer = styled.div`
  display: none;

  @media screen and (max-width: 640px) {
    display: flex;
    width: 70%;
    height: 1.25rem;
  }
`;

const ResponsiveBTN = styled.button`
  background-color: black;
  border: 0px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
`;

const ResponsiveBTNLink = styled.a`
  font-family: var(--tertiary-font);
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  padding-top: 0.2rem;
`;

const ProjectsSection = () => {
  return (
    <>
      <SectionContainer>
        <ProjectDescription>
          <DecorationLine backgroundColor="black" width="30%" />
          <ProjectTitle>{projects[5].title}</ProjectTitle>
          <ProjectP>
            {projects[5].projectInfo}
          </ProjectP>
          <ProjectLink>
            <Link to="/work"> 
              <ProjectButton>VER MÁS</ProjectButton>
            </Link>
          </ProjectLink>
        </ProjectDescription>
        <ProjectImage>
          <ProjectImageOverlay />
        </ProjectImage>
        <ResponsiveBtnContainer>
          <ResponsiveBTN>
            <Link to="/work">
              <ResponsiveBTNLink>VER MÁS</ResponsiveBTNLink>
            </Link>
          </ResponsiveBTN>
        </ResponsiveBtnContainer>
      </SectionContainer>
    </>
  );
};

export default ProjectsSection;
