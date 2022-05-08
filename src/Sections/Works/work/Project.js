import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { WorkSlider } from '../../../components/Slider/Slider';




const ProjectContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({ flexDirection }) => flexDirection};
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

const ProjectDescription = styled.div`
    width: 45%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: left;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
       width: 90%;
       height: 35%;
    }
`;


const ProjectImages = styled.div`
    width: 35%;
    height: 90%;
    /* margin-right: 5%; */
    @media screen and (max-width: 1024px) {
       width: 90%;
       height: 50%;
    }
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
    @media screen and (max-width: 1024px) {
       font-size: 2.8rem;
       line-height: normal;
       background-size: 30%;
       width: 95%;
    }
`;

const ProjectDesc = styled.p`
    width: 80%;
    margin-left: 7%;
    font-family: var(--secondary-font);
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
    @media screen and (max-width: 1024px) {
       font-size: 0.8rem;
       margin-bottom: 13%;
    }
`;

const ProjectPlaceDesc = styled.p`
    font-family: var(--primary-font);
    margin-left: 7%;
    font-weight: bolder;
    font-size: 1rem;
    line-height: 1.6rem;
    letter-spacing: 0.1rem;
    @media screen and (max-width: 1024px) {
       font-size: 0.6rem;
       line-height: -1rem;
       margin-left: 0%;
       margin-top: 6%;
       height: 5%;
       width: 100%;
    }
`;
const BlockSpacing = styled.div`
    width: 100%;
    height: 10vh;
    @media screen and (max-width: 1024px) {
       
    }
`;
export const Project = (props) => {

  const [show, setShow] = useState(true);  
  const size = window.screen.width;
  useEffect(() => {
      console.log(size,show);
      size > 1024 ? setShow(true) : setShow(false);
    return show;
  }, [show, size]);
  

  return (
    <>
        <ProjectContainer flexDirection={props.flexDirection}>
            <ProjectDescription>
                <ProjectTitle padT={props.padT} height={props.height} background={props.bImg}> { props.title } </ProjectTitle>
                <ProjectDesc> { props.projectInfo } </ProjectDesc>
                {show &&
                (<div>
                    <ProjectPlaceDesc> { props.placeInfo } </ProjectPlaceDesc>
                    <ProjectPlaceDesc> { props.placeInfo2 } </ProjectPlaceDesc>
                </div>)}
            </ProjectDescription>
            <ProjectImages>
                <WorkSlider images={ props.images } />
            </ProjectImages>
            {!show &&
                (<div>
                    <ProjectPlaceDesc> { props.placeInfo } </ProjectPlaceDesc>
                    <ProjectPlaceDesc> { props.placeInfo2 } </ProjectPlaceDesc>
                </div>)}
        </ProjectContainer>
        {show && <BlockSpacing />}
    </>
  )
}
