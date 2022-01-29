//Styled / anim
import styled from "styled-components";
import { colors } from "../Assets/Other/themes";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <Container>
      <h1>Customer support made easy</h1>
      <p>A better experience for everyone involved.</p>
      <Buttons>
        <Button>Free demo*</Button>
      </Buttons>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  > * {
    margin-top: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: medium;
    background: ${colors.cyan};
    background: linear-gradient(80deg, ${colors.cyan} 0%, ${colors.white} 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Buttons = styled.div`
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  color: ${colors.text};
  background: ${colors.cyan};
  font-size: 1rem;
  border: none;
  border-radius: 3px;
`;

export default Welcome;
