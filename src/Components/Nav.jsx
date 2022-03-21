import React from "react";

//Import styles and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/themes";
import { motion } from "framer-motion";

//Import logo
import logo from "../Assets/Img/Mingo_Desk_Final_horizontal.png";
import burger from "../Assets/Img/burger.svg";

import { MenuIcon } from "@heroicons/react/solid";

const Nav = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <div className="desktop">
          <img src={logo} alt="Zebraff" />
        </div>
        <div className="mobile">
          <MenuIcon />
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
    svg {
      width: 3rem;
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
