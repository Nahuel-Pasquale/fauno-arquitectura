import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import SliderCard from "../SliderCard/SliderCard";
import styled from "styled-components";
import "./slider.css";

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Slider = ({ sliderImages }) => {
  return (
    <>
      <SliderContainer>
        <Swiper
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
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <SliderCard image={image}></SliderCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </>
  );
};

export default Slider;
