import React from "react";
import styled from "styled-components";
import LogoOverlay from "../../../components/LogoOverlay/LogoOverlay";
import LandingNavbar from "../../../components/Navbar/LandingNavbar";
import Slider from "../../../components/Slider/Slider";

import { sliderImages } from "../../../data/data";

const HeaderUI = styled.header`
  width: 100%;
  height: 100vh;
`;

const Header = ({ isOpen, handleChange }) => {
  return (
    <>
      <LogoOverlay />
      <HeaderUI>
        <LandingNavbar isOpen={isOpen} handleOpen={handleChange} />
        <Slider sliderImages={sliderImages} />
      </HeaderUI>
    </>
  );
};

export default Header;
