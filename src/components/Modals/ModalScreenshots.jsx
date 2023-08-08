import { AiFillCloseCircle } from "react-icons/ai";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ModalScreenshots.css";
import { ContextScreen } from "../../Context/ContextScreen/ContextScreen";
export const ModalScreenshots = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { filter, data, setStateModal } = useContext(ContextScreen);
  function openModal() {
    setStateModal(false);
    document.documentElement.style.overflow = "auto";
  }
  return (
    <div className="container__modal">
      <div className="conatiner__button__close__modal">
        <button className="close__modal" onClick={openModal}>
          <i className="icon_close">
            <AiFillCloseCircle />
          </i>
        </button>
      </div>
      <div className="relative flex justify-center items-center w-[85%] h-[85%] z-50 rounded-lg overflow-hidden">
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
          <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full overflow-hidden rounded-xl">
              <div className="h-full w-full">
                <img
                  src={filter.image?.replace("media/", "media/resize/1280/-/")}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
