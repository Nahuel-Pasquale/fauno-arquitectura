import React from "react";
import styled from "styled-components";
import LogoOverlay from "../../../components/LogoOverlay/LogoOverlay";
import Navbar from "../../../components/Navbar/Navbar";
import Slider from "../../../components/Slider/Slider";

import { sliderImages } from "../../../data/data";

const HeaderUI = styled.header`
  width: 100%;
  height: 100vh;
`;

const Header = () => {
  return (
    <>
      <LogoOverlay />
      <HeaderUI>
        <Slider sliderImages={sliderImages} />
        <Navbar />
      </HeaderUI>
    </>
  );
};

export default Header;
