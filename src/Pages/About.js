import React from "react";
import Hamburger from "../components/Hamburger/Hamburger";
import SectionNavbar from "../components/Navbar/SectionsNavbar";
// import Navbar from "../components/Navbar/LandingNavbar";
import { Intro } from "../Sections/About/01-Intro/Intro";
import { AboutFauno } from "../Sections/About/02-About-fauno/About-fauno";
import { Work } from "../Sections/About/03-Work/Work";

export const About = ({ isOpen, handleOpen }) => {
  return (
    <div>
      <Hamburger isOpen={isOpen} handleOpen={handleOpen} />
      <SectionNavbar isOpen={isOpen} handleOpen={handleOpen} />
      <Intro />
      <AboutFauno />
      <Work />
    </div>
  );
};
