import React from 'react'
import styled from "styled-components";
import { WorkSlider } from '../../../components/Slider/Slider';
// import { projects } from '../../../data/data'


const ProjectContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({ flexDirection }) => flexDirection};
`;

const ProjectDescription = styled.div`
    width: 45%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: left;
    flex-direction: column;
`;


const ProjectImages = styled.div`
    width: 35%;
    height: 90%;
    margin-right: 5%;
`;

const ProjectTitle = styled.h2`
    width: 90%;
    height: ${({ height }) => height};
    font-size: 4.4rem;
    font-family: var(--primary-font);
    background: url(${({ background }) => background});
    background-size: 28%;
    /* background-position: center; */
    background-repeat: no-repeat;
    padding-left: 7%;
    padding-top: ${({ padT }) => padT};
    line-height: 4.5rem;
`;

const ProjectDesc = styled.p`
    width: 80%;
    margin-left: 7%;
    font-family: var(--secondary-font);
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
`;

const ProjectPlaceDesc = styled.p`
    font-family: var(--primary-font);
    margin-left: 7%;
    font-weight: bolder;
    font-size: 1rem;
    line-height: 1.6rem;
    letter-spacing: 0.1rem;
`;
const BlockSpacing = styled.div`
    width: 100%;
    height: 10vh;
`;

export const Project = (props) => {
  return (
    <>
        <ProjectContainer flexDirection={props.flexDirection}>
            <ProjectDescription>
                <ProjectTitle padT={props.padT} height={props.height} background={props.bImg}> { props.title } </ProjectTitle>
                <ProjectDesc> { props.projectInfo } </ProjectDesc>
                <div>
                <ProjectPlaceDesc> { props.placeInfo } </ProjectPlaceDesc>
                <ProjectPlaceDesc> { props.placeInfo2 } </ProjectPlaceDesc>
                </div>
            </ProjectDescription>
            <ProjectImages>
                <WorkSlider images={ props.images } />
            </ProjectImages>
        </ProjectContainer>
        <BlockSpacing />
    </>
  )
}
