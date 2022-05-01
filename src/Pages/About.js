import React from "react";
import Hamburger from "../components/Hamburger/Hamburger";
import SectionNavbar from "../components/Navbar/SectionsNavbar";

import { Intro } from "../Sections/About/01-Intro/Intro";
import { AboutFauno } from "../Sections/About/02-About-fauno/About-fauno";
import { Work } from "../Sections/About/03-Work/Work";

export const About = () => {
  return (
    <div>
      <Hamburger color="white" />
      <SectionNavbar />
      <Intro />
      <AboutFauno />
      <Work />
    </div>
  );
};
