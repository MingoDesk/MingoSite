// Components
import Welcome from "../Components/Welcome";
import Product from "../Components/Product";
import InformationSection from "../Components/InformationSection";
import Contact from "../Components/Contact";

//Import styled and animations
import styled from "styled-components";
// import { colors } from "../Assets/Other/themes";
import { motion } from "framer-motion";

//Import logo/other images
import logo from "../Assets/Img/Mingo_Desk_Final_horizontal_White.png";
import logoLight from "../Assets/Img/Mingo_Desk_Final_horizontal.png";

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
      <Product theme={theme} />
      <InformationSection theme={theme} />
      <Contact />
      {/* Security & Trust */}
      <StyledFooter />
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  /* padding: 0 2rem; */
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileLogo = styled.img`
  align-self: flex-start;
  z-index: 100;
  height: 1.5rem;
  margin: 2rem 1rem 0;
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 5vh;
`;

export default LandingPage;
