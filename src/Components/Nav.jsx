import React from "react";

//Import styles and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/themes";
import { motion } from "framer-motion";

//Import logos/other images
import logo from "../Assets/Img/Mingo_Desk_Final_horizontal_White.png";
import logoLight from "../Assets/Img/Mingo_Desk_Final_horizontal.png";
import { MenuAlt1Icon as BurgerMenu } from "@heroicons/react/solid";

const Nav = ({ toggleTheme, theme }) => {
  return (
    <StyledNav>
      <StyledMenu>
        <div className="desktop">
          <img
            src={theme === "dark" ? logo : logoLight}
            alt="MingoSite"
            onClick={toggleTheme}
          />
        </div>
        <div className="mobile">
          <BurgerMenu />
        </div>
      </StyledMenu>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  z-index: 69;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  img {
    height: 3rem;
    cursor: pointer;
  }
  @media (min-width: 600px) {
    position: initial;
    display: flex;
    align-items: center;
    height: 10vh;
    padding: 1rem 10rem;

    .desktop {
      display: flex;
      align-items: center;
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
