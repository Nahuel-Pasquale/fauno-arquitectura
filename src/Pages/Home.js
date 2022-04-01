import React from "react";
import Footer from "../components/Footer/Footer";
import Hamburger from "../components/Hamburger/Hamburger";
import Header from "../Sections/Home/Header/Header";
import ProjectsSection from "../Sections/Home/Projects/ProjectsSection";
import VideoSection from "../Sections/Home/Video/VideoSection";

export const Home = ({ isOpen, handleOpen }) => {
  return (
    <>
      <Header isOpen={isOpen} handleOpen={handleOpen} />
      <Hamburger isOpen={isOpen} handleOpen={handleOpen} landing />
      <ProjectsSection />
      <VideoSection />
      <Footer />
    </>
  );
};
