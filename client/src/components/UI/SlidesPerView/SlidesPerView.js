import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import styles from "./styles.css";
import React, { useState, useEffect } from "react";

function SlidesPerView(props) {
  const SwiperSlides = props.slides.map((slide, index) => (
    <SwiperSlide key={index}>{slide}</SwiperSlide>
  ));

  const [slidesNumber, setSlidesNumber] = useState(5);
  const [spaceBetween, setSpaceBetween] = useState(20);

  useEffect(() => {
    function handleWindowResize() {
      const width = getWindowWidth();
      if (width > 1020) setSlidesNumber(5);
      else if (width <= 1020 && width > 770) setSlidesNumber(4);
      else if (width <= 770 && width > 500) setSlidesNumber(3);
      else {
        setSlidesNumber(2);
        setSpaceBetween(10);
      }
    }

    function getWindowWidth() {
      const { innerWidth } = window;
      return innerWidth;
    }

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={styles.mySwiper}
      slidesPerView={slidesNumber}
      loop={true}
      spaceBetween={spaceBetween}
    >
      {SwiperSlides}
    </Swiper>
  );
}

export default SlidesPerView;
