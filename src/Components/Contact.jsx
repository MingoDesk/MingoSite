import styled from "styled-components";
import { colors } from "../Assets/Other/themes";

const Contact = () => {
  return (
    <Container>
      <p id="contact">
        <a href="#why">Contact Sales</a> &rarr;
      </p>

      <SalesInfo>
        <h2 id="why">Why MingoDesk?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          cumque pariatur aspernatur at minus quos nostrum ab officia harum
          quibusdam. Et, fugit aliquid hic autem saepe facilis in, tempore,
          cumque tempora ea vel ad natus itaque nesciunt? Error quis nemo
          expedita quo sed, dolorem consectetur animi exercitationem quam natus
          a.
        </p>
        <Buttons>
          <Button>Request a Demo</Button>
          <Button2>Contact Sales</Button2>
        </Buttons>
      </SalesInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin-top: 2rem;
  padding: 0 1rem;
  #contact {
    display: fixed;
    left: 1rem;

    a {
      color: ${colors.text};
      text-decoration: underline;
    }
  }
`;

const SalesInfo = styled.div`
  text-align: center;
  margin-top: 4rem;
  h2 {
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    line-height: 2rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  color: ${colors.buttonText};
  background: ${colors.buttonBg};
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  transition: ease-in 0.1s;
  &:hover {
    cursor: pointer;
    background: ${colors.buttonBgHover};
  }
`;

const Button2 = styled(Button)`
  background: ${colors.transparent};
  border: 2px solid ${colors.buttonBg};
`;

export default Contact;
