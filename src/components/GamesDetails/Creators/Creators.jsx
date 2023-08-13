import React from "react";
import { useFetch } from "../../../hooks/useFech";
import { URL, API_KEY } from "../../../config/config";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./creators.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BackgroundCreators } from "./BackgroundCreators";
export const Creators = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `${URL}/games/${id}/development-team?key=${API_KEY}`
  );
  return (
    <div className="px-8">
      {console.log(data)}

      {data?.results?.length !== 0 && (
        <div className="w-full relative ">
          <h4 className="text-3xl py-4 font-semibold">Creators</h4>

          <ul className="flex flex-wrap w-full relative">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                  centeredSlides : false,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data?.results?.map((creator) => (
                <SwiperSlide className="w-full">
                  <li
                    className="relative px-3 py-7 flex flex-col justify-center items-center  max-w-[300px] min-w-[300px] rounded-xl overflow-hidden border border-[#ffffff20]"
                    key={creator.id}
                  >
                    <BackgroundCreators background={creator.image_background} />
                    <div className="flex flex-col justify-center items-center w-full z-10">
                      <span className="py-3 font-semibold text-lg">
                        {creator.name}
                      </span>
                      <div className="max-w-[100px] w-full overflow-hidden rounded-full max-h-[100px] min-h-[100px] h-full ">
                        <img
                          src={
                            creator.image
                              ? creator?.image?.replace(
                                  "media/",
                                  `media/resize/420/-/`
                                )
                              : "../../../usuario.png"
                          }
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="py-2 flex flex-wrap gap-3 ">
                        {creator?.positions?.map((position) => (
                          <div>{position.name}</div>
                        ))}
                      </div>
                      <div className="w-full">
                        <p className="text-lg font-semibold">Known for</p>
                        <div className="flex flex-col py-1  w-full">
                          {creator?.games?.map((game) => (
                            <Link to={`/games/${game.id}`}>
                              <span className="text-sm hover:opacity-80 hover:underline">
                                {game.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      )}
    </div>
  );
};
