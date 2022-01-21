import React from "react";
//Images
import image1 from "../Assets/Img/1.png";
import image2 from "../Assets/Img/2.png";
import image3 from "../Assets/Img/3.png";

//Import styled/animations - Swiper React components
import styled from "styled-components";
import { colors } from "../Assets/Other/stylingcolors";
import { motion } from "framer-motion";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// install Swiper modules
SwiperCore.use([Pagination, EffectFade, Autoplay]);

const SlideShow = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + ' bullet">' + (index + 1) + "</span>"
      );
    },
  };

  const slides = [];
  const images = [image1, image2, image3];
  for (let i = 0; i < images.length; i++) {
    slides.push(
      <SwiperSlide className="swiper-image" key={i}>
        <img src={images[i]} alt="test" tag="li" />
      </SwiperSlide>
    );
  }

  const sliderParams = {
    tag: "section",
    wrapperTag: "ul",
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: pagination,
    effect: "fade",
    loop: true,
    autoplay: { delay: 2000, disableOnInteraction: false },
  };

  return (
    <Slide>
      <Images {...sliderParams}>{slides}</Images>
    </Slide>
  );
};

const Slide = styled(motion.div)`
  height: 30vh;
  width: 100%;
  .swiper {
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-pagination-bullet {
    width: 0.5rem;
    height: 0.5rem;
    font-size: 12px;
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    background: ${colors.bgElements};
    @media (min-width: 600px) {
      width: 1rem;
      height: 1rem;
    }
  }
  .swiper-pagination-bullet.bullet {
    margin: 0.5rem;
  }
  .swiper-pagination-bullet-active {
    background: ${colors.pink};
  }
`;
const Images = styled(Swiper)`
  img {
    width: 100%;
    border-radius: 1rem;
  }
`;

export default SlideShow;
