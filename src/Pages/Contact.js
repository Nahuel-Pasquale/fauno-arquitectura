import React from "react";
import styled from "styled-components";
import Hamburger from "../components/Hamburger/Hamburger";
import SectionNavbar from "../components/Navbar/SectionsNavbar";
import ContactMap from "../Sections/Contact/01-Contact-map/ContactMap";
import ContactInfo from "../Sections/Contact/02-Contact-info/ContactInfo";

const ContactUI = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  @media screen and (max-width: 620px) {
    flex-direction: column-reverse;
  }
`;

export const Contact = () => {
  return (
    <>
      <Hamburger color="white" />
      <ContactUI>
        <SectionNavbar />
        <ContactMap />
        <ContactInfo />
      </ContactUI>
    </>
  );
};
