import React from "react";
import { useMediaQuery } from "react-responsive";

//Import styled and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/themes";

import { motion } from "framer-motion";
import { RemoveBgElements } from "../Assets/Other/animations";

const Bgelememts = () => {
  return (
    <StyledBgElements
      variants={RemoveBgElements(
        useMediaQuery({ query: "(max-width: 600px)" })
      )}
      initial="before"
      animate="after"
    >
      <BgElementSquare />
      <BgElementCircle />
      <BgElementSquare2 />
    </StyledBgElements>
  );
};

const StyledBgElements = styled(motion.div)`
  position: absolute;
  z-index: -1 !important;
`;

const BgElementCircle = styled(motion.div)`
  position: absolute;
  background: ${colors.bgElements};
  height: 20rem;
  width: 20rem;
  transform: rotate(65deg);
  top: -5rem;
  left: 30rem;
  border-radius: 50%;
`;

const BgElementSquare = styled(BgElementCircle)`
  border-radius: initial;
  height: 20vh;
  width: 20vh;
  top: 40rem;
  right: -2rem;
`;

const BgElementSquare2 = styled(BgElementSquare)`
  height: 12vh;
  width: 12vh;
  top: 55rem;
  left: 0rem;
`;

export default Bgelememts;
