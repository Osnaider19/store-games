import React from "react";
import { useFetch } from "../../hooks/useFech";
import { ButtonSlider } from "./ButtonSlider";
import { useRef } from "react";
import { handelScrollLeft, handelScrollRigth } from "./FuntionScroll";
import { URL, API_KEY } from "../../config/config";
import { Card } from "../Card/Card";

export const SliderGames = () => {
  const refSliderGames = useRef();
  const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
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
        className="relative w-full flex  gap-5 justify-between py-5 overflow-hidden snap-mandatory scroll-smooth "
        ref={refSliderGames}
      >
        {data?.map((game) => (
          <div
            className="relative rounded-lg max-w-[270px] h-full min-w-[270px]  overflow-hidden"
            key={game.id}
          >
            <Card
              capture={game.short_screenshots}
              name={game.name}
              genres={game.genres}
              star={game.rating}
              date={game.released}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
