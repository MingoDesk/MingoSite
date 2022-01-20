import React from "react";

//Import styles and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/stylingcolors";
import { motion } from "framer-motion";

//Import logo
import logo from "../Assets/Img/temp_logo.gif";
import burger from "../Assets/Img/burger.svg";

const Nav = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <div className="desktop">
          <img src={logo} alt="Zebraff" />
          <h1>MingoDesku</h1>
        </div>
        <div className="mobile">
          <img src={burger} alt="Borgar" />
        </div>
      </StyledMenu>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  img {
    width: 3rem;
  }
  .mobile {
    img {
      cursor: pointer;
    }
  }
  .desktop {
    display: none;
  }
  @media (min-width: 600px) {
    position: initial;
    display: flex;
    align-items: center;
    height: 10vh;
    background-color: lightblue;
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
