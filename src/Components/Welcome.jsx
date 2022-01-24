import React from 'react';
//Import styled and animations
import styled from "styled-components";
import { colors } from '../Assets/Other/stylingcolors';

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
                <button>Use it for free!*</button>
            </StyledWelcome>
        </div>
    );
}

const StyledWelcome = styled(motion.div)`
  text-align: center;
  line-height: 4rem;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
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
    z-index: 2;
  }
`;

export default Welcome;
