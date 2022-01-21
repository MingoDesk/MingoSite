import React from "react";

//Import styled and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/stylingcolors";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <StyledContainer>
      <h1>Hello World</h1>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  padding: 0 5vw;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    min-height: 90vh;
  }
`;

export default LandingPage;
