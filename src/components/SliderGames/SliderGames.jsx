import React from "react";
import { useFetch } from "../../hooks/useFech";
import { HiStar } from "react-icons/hi";
import { SliderCapture } from "./SliderCapture";
import { GenresGames } from "./GenresGames";
import { ButtonSlider } from "./ButtonSlider";
import { useRef } from "react";
import { handelScrollLeft, handelScrollRigth } from "./FuntionScroll";
export const SliderGames = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const refSliderGames = useRef();
  const { data } = useFetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=30`
  );
  return (
    <div className="relative  w-[95%] m-auto">
      <ButtonSlider
        scrollLeft={() => {
          handelScrollRigth(refSliderGames);
        }}
        scrollRigth={() => {
          handelScrollLeft(refSliderGames);
        }}
      />
      <div
        className="relative w-full flex  gap-5 justify-between overflow-hidden snap-mandatory scroll-smooth "
        ref={refSliderGames}
      >
        {data?.map((game) => (
          <div
            className="relative rounded-lg max-w-[300px] h-full min-w-[300px]  overflow-hidden"
            key={game.id}
          >
            <SliderCapture capture={game.short_screenshots} />
            <div className="py-2 px-2">
              <div>
                <p className="text-xl">{game.name}</p>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <i className="text-xl text-yellow-400">
                  <HiStar />
                </i>
                <p>{game.rating}</p>
              </div>
              <GenresGames genres={game.genres} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
