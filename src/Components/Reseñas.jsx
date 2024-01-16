import { reseñas } from "../index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

const Reseñas = () => {
  return (
    <section>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 15 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          1280: { slidesPerView: 3, spaceBetween: 15 },
        }}
        navigation
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {reseñas.cards.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="shadow-xl p-8 rounded-lg border-b-4 border-cyan-500">
                <h4>{item.title}</h4>
                <p className="text-lg  text-slate-600 leading-loose mb-3">
                  {item.content}
                </p>
                <span className="font-bold">{item.person}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reseñas;
