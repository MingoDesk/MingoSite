// Components
import Welcome from "../Components/Welcome";

//Import styled and animations
import styled from "styled-components";
import { colors } from "../Assets/Other/themes";
import { motion } from "framer-motion";

//Import logo/other images
import logo from "../Assets/Img/Mingo_Desk_Final_horizontal_White.png";
import logoLight from "../Assets/Img/Mingo_Desk_Final_horizontal_White.png";

const LandingPage = ({ toggleTheme, theme }) => {
  return (
    <StyledContainer>
      <MobileLogo
        src={theme === "dark" ? logo : logoLight}
        alt="MingoSite"
        className="mobile mobile-logo"
        onClick={toggleTheme}
      />
      <Welcome />
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  padding: 0 2rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileLogo = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  height: 2rem;
`;

export default LandingPage;
