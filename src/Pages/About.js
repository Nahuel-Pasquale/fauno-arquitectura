import React from "react";
import { Intro } from "../Sections/About/01-Intro/Intro";
import { AboutFauno } from "../Sections/About/02-About-fauno/About-fauno";
import { Work } from "../Sections/About/03-Work/Work";

export const About = () => {
  return (
    <div>
      <Intro />
      <AboutFauno />
      <Work />
    </div>
  );
};
