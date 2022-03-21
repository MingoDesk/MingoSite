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
        <Button>Use it for free!*</Button>
      </Buttons>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin-top: 10rem;
  width: 100%;
  > * {
    margin-top: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: medium;
    background: ${colors.cyan};
    background: linear-gradient(
      80deg,
      ${colors.text2} 0%,
      ${colors.text3} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Buttons = styled.div`
  width: 100%;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  color: ${colors.buttonText};
  background: ${colors.buttonBg};
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  transition: ease-in 0.1s;
  &:hover {
    cursor: pointer;
    background: ${colors.buttonBgHover};
  }
`;

export default Welcome;
