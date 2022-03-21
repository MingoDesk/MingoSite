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
  margin-top: 10rem;
  img {
    width: 90%;
    border-radius: 0.25rem;
  }
`;

export default Product;
