import React from "react";

//Import styled and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/stylingcolors";
import { motion } from "framer-motion";

//Components
import SlideShow from "../Components/SlideShow";

//Import logos/other images
import logo from "../Assets/Img/Mingo_Desk_Final_horizontal_White.png";

const LandingPage = () => {
  return (
    <StyledContainer>
      <MobileLogo src={logo} alt="MingoSite" className="mobile mobile-logo" />
      <BgElement1 />
      <Welcome>
        <h1>
          Customer support
          <br />
          made easy
        </h1>
        <h3>A better experience for everone involved.</h3>
        <button>Use it for free!*</button>
      </Welcome>
      <SlideShow />
      <BgElement2 />
      <BgElement3 />
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

const BgElement1 = styled(motion.div)`
  position: absolute;
  background: ${colors.bgElements};
  opacity: 1;
  height: 17rem;
  width: 17rem;
  transform: rotate(65deg);
  z-index: 0;
  top: -10rem;
  right: -3rem;
`;

const BgElement2 = styled(BgElement1)`
  border-radius: 50%;
  height: 20vh;
  width: 20vh;
  top: 40rem;
  right: -2rem;
`;

const BgElement3 = styled(BgElement1)`
  height: 12vh;
  width: 12vh;
  top: 55rem;
  left: 0rem;
`;

const Welcome = styled(motion.div)`
  text-align: center;
  line-height: 4rem;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    background: ${colors.cyan};
    background: linear-gradient(80deg, ${colors.cyan} 0%, ${colors.white} 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-weight: 500;
    padding-bottom: 1rem;
  }
  button {
    background: ${colors.cyan};
    color: ${colors.white};
    font-size: 1.5rem;
    border: none;
    border-radius: 0.3rem;
    padding: 1rem 2rem;
    width: 60%;
  }
`;

export default LandingPage;
