import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Mousewheel, Lazy, EffectFade } from "swiper";
import "./styles.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import image from "./images/hops.jpg";
import image1 from "./images/hops1.jpg";
import image2 from "./images/hops2.jpg";
import image3 from "./images/hops3.jpg";
import image4 from "./images/hops4.jpg";
import image5 from "./images/hops5.jpg";
import image6 from "./images/hops6.jpg";

function FAQPhoto() {
  SwiperCore.use([Autoplay, Lazy, Mousewheel, EffectFade]);
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      Lazy={true}
      Mousewheel={true}
      EffectFade={true}
      direction={"vertical"}
    >
      <SwiperSlide>
        <img className="materialboxed faq-photo" src={image} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="materialboxed faq-photo" src={image1} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="materialboxed faq-photo" src={image2} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="materialboxed faq-photo" src={image3} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="materialboxed faq-photo" src={image4} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="materialboxed faq-photo" src={image5} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="materialboxed faq-photo" src={image6} />
      </SwiperSlide>
    </Swiper>
  );
}

export default FAQPhoto;
