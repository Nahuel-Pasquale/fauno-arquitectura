import React from "react";
import styled from "styled-components";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 640px) {
    height: 60vh;
  }
`;

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  filter: brightness(0.4);
  cursor: pointer;
  border: 0px solid black;

  &:hover {
    filter: brightness(1);
  }
`;

const VideoSection = () => {
  return (
    <VideoContainer>
      <Video
        allowfullscreen
        src="https://www.youtube.com/embed/4y4S9WgzM0U"
        poster="imagenes/logo primario arq. const..png"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </VideoContainer>
  );
};

export default VideoSection;
