import { Navigation, Pagination,  A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderScreenshots = ({ images }) => {
  return (
    <div className="relative w-[90%] m-auto py-3">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination,  A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((img) => (
          <div key={img.id}>
            <SwiperSlide>
              <img
                src={img.image.replace("media/", `media/crop/600/400/`)}
                alt=""
                className="w-full h-full max-h-[175px] max-w-[311px] object-cover"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
