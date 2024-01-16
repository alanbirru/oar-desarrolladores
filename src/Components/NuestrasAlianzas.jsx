import { nuestrasAlianzas } from "../index.js";
import SectionTitle from "./SectionTitle.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const NuestrasAlianzas = ({ marginBottom }) => {
  return (
    <section className={`mt-28 w-[70%] m-auto ${marginBottom}`}>
      <SectionTitle title={"Nuestras Alianzas"} />
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 15 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1280: { slidesPerView: 6, spaceBetween: 20 },
        }}
        navigation
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        {nuestrasAlianzas.map((logo, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt=""
                className="w-full hover:scale-110 transition-all"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default NuestrasAlianzas;
