import React, { useContext } from "react";
import { BlockSpacing, Project } from "../Sections/Works/work/Project";
import { projects } from "../data/data";
import Footer from "../components/Footer/Footer";
import Hamburger from "../components/Hamburger/Hamburger";
import SectionNavbar from "../components/Navbar/SectionsNavbar";
import { MenuContext } from "../context/context";
export const Work = () => {
  const ctx = useContext(MenuContext);
  return (
    <>
      <Hamburger color={ctx.isMenuOpen ? "white" : "black"} />
      <SectionNavbar />
      <BlockSpacing />
      <Project
        height="35%"
        padT="5%"
        flexDirection="row"
        title={projects[0].title}
        projectInfo={projects[0].projectInfo}
        placeInfo={projects[0].placeInfo}
        placeInfo2={projects[0].placeInfo2}
        bImg={projects[0].bImg}
        images={projects[0].images}
      />
      <Project
        height="25%"
        padT="4%"
        flexDirection="row-reverse"
        title={projects[1].title}
        projectInfo={projects[1].projectInfo}
        placeInfo={projects[1].placeInfo}
        placeInfo2={projects[1].placeInfo2}
        bImg={projects[1].bImg}
        images={projects[1].images}
      />
      <Project
        height="25%"
        padT="4%"
        flexDirection="row"
        title={projects[2].title}
        projectInfo={projects[2].projectInfo}
        placeInfo={projects[2].placeInfo}
        placeInfo2={projects[2].placeInfo2}
        bImg={projects[2].bImg}
        images={projects[2].images}
      />
      <Project
        height="25%"
        padT="4%"
        flexDirection="row-reverse"
        title={projects[3].title}
        projectInfo={projects[3].projectInfo}
        placeInfo={projects[3].placeInfo}
        placeInfo2={projects[3].placeInfo2}
        bImg={projects[3].bImg}
        images={projects[3].images}
      />
      <Project
        height="35%"
        padT="4%"
        flexDirection="row"
        title={projects[4].title}
        projectInfo={projects[4].projectInfo}
        placeInfo={projects[4].placeInfo}
        placeInfo2={projects[4].placeInfo2}
        bImg={projects[4].bImg}
        images={projects[4].images}
      />
      <Project
        height="25%"
        padT="4%"
        flexDirection="row-reverse"
        title={projects[5].title}
        projectInfo={projects[5].projectInfo}
        placeInfo={projects[5].placeInfo}
        placeInfo2={projects[5].placeInfo2}
        bImg={projects[5].bImg}
        images={projects[5].images}
      />
      <Project
        height="25%"
        padT="4%"
        flexDirection="row"
        title={projects[6].title}
        projectInfo={projects[6].projectInfo}
        placeInfo={projects[6].placeInfo}
        placeInfo2={projects[6].placeInfo2}
        bImg={projects[6].bImg}
        images={projects[6].images}
      />
      <Project
        height="25%"
        padT="4%"
        flexDirection="row-reverse"
        title={projects[7].title}
        projectInfo={projects[7].projectInfo}
        placeInfo={projects[7].placeInfo}
        placeInfo2={projects[7].placeInfo2}
        bImg={projects[7].bImg}
        images={projects[7].images}
      />
      <Project
        height="35%"
        padT="4%"
        flexDirection="row"
        title={projects[8].title}
        projectInfo={projects[8].projectInfo}
        placeInfo={projects[8].placeInfo}
        placeInfo2={projects[8].placeInfo2}
        bImg={projects[8].bImg}
        images={projects[8].images}
      />
      <Footer />
    </>
  );
};

export default Work;
