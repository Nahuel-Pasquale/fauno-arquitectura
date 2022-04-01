import React from "react";
import styled from "styled-components";
import LogoOverlay from "../../../components/LogoOverlay/LogoOverlay";
import Navbar from "../../../components/Navbar/LandingNavbar";
import Slider from "../../../components/Slider/Slider";

import { sliderImages } from "../../../data/data";

const HeaderUI = styled.header`
  width: 100%;
  height: 100vh;
`;

const Header = ({ isOpen, handleOpen }) => {
  return (
    <>
      <LogoOverlay />
      <HeaderUI>
        <Navbar isOpen={isOpen} handleOpen={handleOpen} />
        <Slider sliderImages={sliderImages} />
      </HeaderUI>
    </>
  );
};

export default Header;
