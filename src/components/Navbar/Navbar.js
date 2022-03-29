import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarUI = styled.nav`
  font-family: var(--tertiary-font);
  /* letter-spacing: 0.1rem; */
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 0.01rem 0 rgba(0, 0, 0.1);
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: fixed;
  top: 0;
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
`;

const NavLink = styled.li`
  list-style: none;
  /* width: 20%; */
  padding-top: 0.4rem;
`;

const Logo = styled.img`
  width: 11rem;
  margin-left: 3rem;
`;

// const HamburgerContainer = styled.div`
//   position: absolute;
//   color: #fff;
//   right: 40px;
//   top: 0;
//   height: 8vh;
//   width: 2.2rem;
//   cursor: pointer;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 0.1rem;
// `;

// const Icon = styled.span`
//   position: relative;
//   background-color: ${(props) =>
//     props.clicked === true ? "transparent" : "#fff"};
//   width: 75%;
//   height: 1px;
//   display: inline-block;
//   transition: all 0.3s;
//   &::before,
//   &::after {
//     background-color: #fff;
//     content: "";
//     width: 100%;
//     height: 1px;
//     display: inline-block;
//     position: absolute;
//     left: 0;
//     transition: all 0.3s;
//   }

//   &::before {
//     top: ${(props) => (props.clicked === true ? "0" : "-0.5rem")};
//     transform: ${(props) =>
//       props.clicked === true ? "rotate(135deg)" : "rotate(0)"};
//   }
//   &::after {
//     top: ${(props) => (props.clicked === true ? "0" : "0.5rem")};
//     transform: ${(props) =>
//       props.clicked === true ? "rotate(-135deg)" : "rotate(0)"};
//   }
// `;

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpen = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <NavbarUI>
        <Logo src="images/logo fauno_Mesa de trabajo 1.png"></Logo>
        <NavMenu>
          <Link to="./">
            <NavLink>HOME</NavLink>
          </Link>
          <Link to="./Work">
            <NavLink>WORK</NavLink>
          </Link>
          <Link to="./About">
            <NavLink>ABOUT</NavLink>
          </Link>
          <Link to="./Contact">
            <NavLink>CONTACTO</NavLink>
          </Link>
        </NavMenu>
        {/* <HamburgerContainer onClick={handleOpen}>
          <Icon clicked={isOpen}></Icon>
        </HamburgerContainer> */}
      </NavbarUI>
    </>
  );
};

export default Navbar;
