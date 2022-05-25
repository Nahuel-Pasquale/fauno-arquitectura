import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import styled from "styled-components";
import "./slider.css";

const SliderContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    z-index: 99999;
    margin-bottom: 20vh;
`

const Hero = styled.div`
    width: 80%;
    height: 80%;
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10vh;
    margin-left: 10%;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 100%;
        margin-top: 0vh;
        margin-left: 0%;
    }
`


const SliderModal = (props) => {
  return (
    <>
        <SliderContainer>
        <Swiper
          className="work-swiper"
          modules={[Pagination, Autoplay, Navigation, EffectFade]}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          navigation
          slidesPerView={1}
          direction={"horizontal"}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          speed={300}
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Hero onClick={ props.onClick } img={image}></Hero>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </>
  )
}

export default SliderModal