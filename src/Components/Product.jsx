//Product
import mingodeskDark from "../Assets/Img/1.png";

import styled from "styled-components";

const Product = ({ theme }) => {
  return (
    <ImageContainer>
      <img src={mingodeskDark} alt="MingoDesk Main Screen" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  margin-top: 15vh;
  img {
    width: 100%;
  }
`;

export default Product;
