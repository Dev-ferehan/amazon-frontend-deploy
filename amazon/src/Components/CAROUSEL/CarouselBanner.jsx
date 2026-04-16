import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Classes from '../CAROUSEL/carousel.module.css'
import { CarouselImg } from "./img/data";
const CarouselBanner = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {CarouselImg.map((imgItem) => {
          return <img src={imgItem} alt="" />;
        })}
      </Carousel>
      <div className={Classes.hero_img}>

      </div>
    </div>
  );
};

export default CarouselBanner;
