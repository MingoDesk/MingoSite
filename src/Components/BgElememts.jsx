import React from 'react';

//Import styled and animations
import styled from "styled-components";
import { colors } from '../Assets/Other/stylingcolors';

import { motion } from "framer-motion";
import { stagger, fade } from "../Assets/Other/animations";

const Bgelememts = () => {
    return (
        <motion.div variants={stagger} initial="before"  animate="after" >  
            <BgElement1 variants={fade} />
            <BgElement2 variants={fade} />
            <BgElement3 variants={fade} />
        </motion.div>
    );
}

const BgElement1 = styled(motion.div)`
  position: absolute;
  background: ${colors.bgElements};
  opacity: 1;
  height: 17rem;
  width: 17rem;
  transform: rotate(65deg);
  z-index: 0 !important;
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

export default Bgelememts;
