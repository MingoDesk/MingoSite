import styled from "styled-components";
import { colors } from "../Assets/Other/themes";

const Information = ({ img, title, desc, bg }) => {
  return (
    <Container>
      <Logo style={{ background: bg }}>{img}</Logo>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  min-height: 10rem;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > * {
    margin-top: 1rem;
  }
  h2,
  p {
    color: ${colors.alwaysWhite};
  }
`;
const Logo = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

export default Information;
