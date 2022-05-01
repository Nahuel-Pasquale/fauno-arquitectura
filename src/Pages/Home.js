import React from "react";
import Footer from "../components/Footer/Footer";
import Hamburger from "../components/Hamburger/Hamburger";
import Header from "../Sections/Home/Header/Header";
import ProjectsSection from "../Sections/Home/Projects/ProjectsSection";
import VideoSection from "../Sections/Home/Video/VideoSection";

export const Home = () => {
  return (
    <>
      <Header />
      <Hamburger landing color="white"/>
      <ProjectsSection />
      <VideoSection />
      <Footer />
    </>
  );
};
