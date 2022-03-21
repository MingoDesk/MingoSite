// Styling
import styled from "styled-components";
import { colors } from "../Assets/Other/themes";

import { information } from "../Assets/Data/information";
import Information from "./Information";

const InformationSection = () => {
  console.log(information.img);
  return (
    <InfoContainer>
      {information &&
        information.map((fact) => {
          return (
            <Information
              img={fact.img}
              title={fact.title}
              desc={fact.description}
              bg={fact.background}
              key={fact.id}
            />
          );
        })}
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  margin-top: 10rem;
  background: ${colors.bg2};
  min-height: 30vh;
  width: 100%;
  border-radius: 0.5rem;
  padding-bottom: 2.5rem;
`;

export default InformationSection;
