import React from "react";
//Import styled and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/themes";

import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div>
      <StyledWelcome>
        <h1>
          Customer support
          <br />
          made easy
        </h1>
        <h3>A better experience for everone involved.</h3>
        <Buttons>
          <Button>Use it for free!*</Button>
          <ButtonTwo>Request a demo</ButtonTwo>
        </Buttons>
      </StyledWelcome>
    </div>
  );
};

const StyledWelcome = styled(motion.div)`
  text-align: center;
  line-height: 4rem;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2 !important;
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
  @media (min-width: 600px) {
    width: 40rem;
    height: 20rem;
    align-items: flex-start;
    text-align: start;
    h1 {
      font-size: 4rem;
    }
  }
`;

const Buttons = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    display: flex;
    height: 4rem;
    width: 100%;
  }
`;
const Button = styled.button`
  background: ${colors.cyan};
  color: ${colors.black};
  font-size: 1.3rem;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  z-index: 2;
  @media (min-width: 600px) {
    padding: 0.4rem 1rem;
    width: 33%;
  }
`;
const ButtonTwo = styled(Button)`
  background: none !important;
  color: ${colors.white} !important;
  border: 3px solid ${colors.cyan} !important;
  padding: -3px;
  margin-left: 1rem;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default Welcome;
