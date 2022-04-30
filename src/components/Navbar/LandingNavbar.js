import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuContext } from "../../context/context";

const NavbarUI = styled.nav`
  font-family: var(--tertiary-font);
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 0.01rem 0 rgba(0, 0, 0.1);
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: absolute;
  top: 0;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    bottom: 0;
    height: 100%;
    left: 0;
    overflow-y: hidden;
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
  }
`;

const NavMenu = styled.ul`
  width: 47%;
  margin-right: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.9rem;
  font-family: var(--tertiary-font);
  color: #fff;
  @media (max-width: 1024px) {
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    height: 50%;
    flex-direction: column;
  }
`;

const NavLink = styled.li`
  list-style: none;
  /* width: 20%; */
  padding-top: 0.4rem;
  @media (max-width: 1024px) {
    list-style: none;
    text-align: center;
    /* font-family: Verdadna, Arial, Helvetica; */
    color: nav-color-text;
    /* color: green; */
    font-size: 1.5rem;
    line-height: 3em;
    height: 3em;
    text-transform: none;
    font-weight: bold;
  }
`;
const LogoContainer = styled.div`
  width: 11rem;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }
`;
const Logo = styled.img`
  width: 100%;
  @media (max-width: 1024px) {
    width: 25%;
  }
`;

const Navbar = () => {
  const ctx = useContext(MenuContext);
  return (
    <>
      <NavbarUI isOpen={ctx.isMenuOpen}>
        <LogoContainer>
          <Logo src="images/logo fauno_Mesa de trabajo 1.png"></Logo>
        </LogoContainer>
        <NavMenu>
          <Link to="/" onClick={window.innerWidth < 1024 && ctx.toggleMenu}>
            <NavLink>HOME</NavLink>
          </Link>
          <Link
            to="./Work"
            onClick={window.innerWidth < 1024 && ctx.toggleMenu}
          >
            <NavLink>WORK</NavLink>
          </Link>
          <Link
            to="/about"
            onClick={window.innerWidth < 1024 && ctx.toggleMenu}
          >
            <NavLink>ABOUT</NavLink>
          </Link>
          <Link
            to="/contact"
            onClick={window.innerWidth < 1024 && ctx.toggleMenu}
          >
            <NavLink>CONTACT</NavLink>
          </Link>
        </NavMenu>
      </NavbarUI>
    </>
  );
};

export default Navbar;
