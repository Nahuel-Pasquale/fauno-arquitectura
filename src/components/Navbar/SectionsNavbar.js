import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuContext } from "../../context/context";
const NavbarUI = styled.nav`
  display: flex;
  font-family: var(--tertiary-font);
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  height: 100%;
  left: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transform: ${(props) =>
    props.isOpen
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, -110%, 0px)"};
  transition: transform 0.35s cubic-bezier(0.05, 1.04, 0.72, 0.98) 0s;
  width: 100%;
  z-index: 1998;
  justify-content: center;
  align-items: center;
`;

const NavMenu = styled.ul`
  width: 47%;
  margin: 0;
  margin-top: 2rem;
  padding: 0;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.9rem;
  font-family: var(--tertiary-font);
  color: #fff;
  flex-direction: column;
`;

const NavLink = styled.li`
  padding-top: 0.4rem;
  list-style: none;
  text-align: center;
  color: nav-color-text;
  font-size: 1.5rem;
  line-height: 3em;
  height: 3em;
  text-transform: none;
  font-weight: bold;
`;
const LogoContainer = styled.div`
  width: 100%;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 20%;
  @media (max-width: 1024px) {
    width: 35%;
  }
`;

const SectionNavbar = () => {
  const ctx = useContext(MenuContext);
  return (
    <>
      <NavbarUI isOpen={ctx.isMenuOpen}>
        <LogoContainer>
          <Logo src="images/logo fauno_Mesa de trabajo 1.png"></Logo>
        </LogoContainer>
        <NavMenu>
          <Link to="/" onClick={ctx.toggleMenu}>
            <NavLink>HOME</NavLink>
          </Link>
          <Link to="/Work" onClick={ctx.toggleMenu}>
            <NavLink>WORK</NavLink>
          </Link>
          <Link to="/about" onClick={ctx.toggleMenu}>
            <NavLink>ABOUT</NavLink>
          </Link>
          <Link to="/contact" onClick={ctx.toggleMenu}>
            <NavLink>CONTACT</NavLink>
          </Link>
        </NavMenu>
      </NavbarUI>
    </>
  );
};

export default SectionNavbar;
