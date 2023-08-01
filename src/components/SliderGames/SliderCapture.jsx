import React from "react";
import { Pagination,  A11y, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';

export const SliderCapture = ({ capture }) => {
  return (
    <div className="relative rounded-lg w-full  overflow-hidden">
      <Swiper
        modules={[Pagination, EffectFade, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        effect={`fade`}
      >
        {capture?.map((img) => (
          
            <SwiperSlide key={img.id}>
              <img
                src={img.image.replace("media/", `media/resize/420/-/`)}
                alt=""
                loading="lazy"
                className="w-full h-full min-h-[205px] max-h-[205px] min-w-[311px]  object-cover"
              />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
