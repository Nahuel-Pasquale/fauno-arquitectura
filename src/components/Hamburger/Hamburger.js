import React, { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../../context/context";

const HamburgerContainer = styled.div`
  display: ${(props) => (props.landing ? "none" : "flex")};
  position: fixed;
  color: #fff;
  right: 2%;
  top: 0;
  height: 8vh;
  width: 2.2rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.1rem;
  z-index: 1999;
  @media (max-width: 1024px) {
    display: flex;
    right: 5%;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) =>
    props.clicked === true ? "transparent" : props.color};
  width: 75%;
  height: 1px;
  display: inline-block;
  transition: all 0.3s;
  &::before,
  &::after {
    background-color: ${(props) => props.color};
    content: "";
    width: 100%;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked === true ? "0" : "-0.5rem")};
    transform: ${(props) =>
      props.clicked === true ? "rotate(135deg)" : "rotate(0)"};
  }
  &::after {
    top: ${(props) => (props.clicked === true ? "0" : "0.5rem")};
    transform: ${(props) =>
      props.clicked === true ? "rotate(-135deg)" : "rotate(0)"};
  }
`;

const Hamburger = (props) => {
  const ctx = useContext(MenuContext);

  return (
    <HamburgerContainer onClick={ctx.toggleMenu} landing={props.landing}>
      <Icon clicked={ctx.isMenuOpen} color={props.color}></Icon>
    </HamburgerContainer>
  );
};

export default Hamburger;
