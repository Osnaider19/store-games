import React from "react";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const Screenshots = ({ id }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { data, error, isPending } = useFetch(
    `${URL}/games/${id}/screenshots?key=${API_KEY}`
  );

  return (
    <>
      {data && (
        <div className="relative">
          <div className="w-full  m-auto overflow-hidden rounded-xl">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              {data.results.map((img) => (
                <SwiperSlide key={img.id}>
                  <div>
                    <img
                      src={img.image.replace("media/", "media/resize/1280/-/")}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}

              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default function App() {
  return <></>;
}
