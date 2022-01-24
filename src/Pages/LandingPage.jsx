import React from "react";

//Import styled and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/stylingcolors";
import { motion } from "framer-motion";
import { stagger, fade } from "../Assets/Other/animations";

//Components
import Bgelememts from "../Components/BgElememts";
import Welcome from "../Components/Welcome";
import SlideShow from "../Components/SlideShow";


//Import logos/other images
import logo from "../Assets/Img/Mingo_Desk_Final_horizontal_White.png";

const LandingPage = () => {
  return (
    <StyledContainer>
      <MobileLogo src={logo} alt="MingoSite" className="mobile mobile-logo" />
      <Welcome />
      <SlideShow />
      <Bgelememts />
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 10rem;
  padding: 0 2rem;

  @media (min-width: 600px) {
    padding: 0 5vw;
    min-height: 90vh;
  }
`;

const MobileLogo = styled.img`
  position: absolute;
  top: 3rem;
  left: 2rem;
  z-index: 100;
  height: 2rem;
`;


export default LandingPage;
