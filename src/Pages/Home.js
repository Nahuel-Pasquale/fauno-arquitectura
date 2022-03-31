import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../Sections/Home/Header/Header";
import ProjectsSection from "../Sections/Home/Projects/ProjectsSection";
import VideoSection from "../Sections/Home/Video/VideoSection";

export const Home = () => {
  return (
    <>
      <Header />
      <ProjectsSection />
      <VideoSection />
      <Footer />
    </>
  );
};
