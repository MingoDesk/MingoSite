import React from "react";
import { ReactSVG } from 'react-svg'

//Import styles and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/stylingcolors";
import { motion } from "framer-motion";

//Import logo
import logo from "../Assets/Img/Mingo_Desk_Final_horizontal_White.svg";
import burger from "../Assets/Img/burger.svg";

const Nav = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <div className="desktop">
          <ReactSVG src={logo} alt="MingoSite" />
        </div>
        <div className="mobile">
          <ReactSVG src={burger} alt="Menu icon"/>
        </div>
      </StyledMenu>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  svg {
    height: 3rem;
    cursor: pointer;
  }
  .desktop {
    display: none;
  }
  @media (min-width: 600px) {
    position: initial;
    display: flex;
    align-items: center;
    height: 10vh;
    padding: 1rem 10rem;
    svg {
      height: 20rem;
    }
    .desktop {
      display: flex;
      align-items: center;
    }
    .mobile {
      display: none;
    }
  }
`;

const StyledMenu = styled(motion.div)`
  display: flex;
  align-items: center;
  h1 {
    color: ${colors.bg};
  }
`;

export default Nav;
