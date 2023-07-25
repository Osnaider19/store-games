import React from "react";
import { useFetch } from "../../hooks/useFech";
import { HiStar } from "react-icons/hi";
import { SliderCapture } from "./SliderCapture";
import { GenresGames } from "./GenresGames";

export const SliderGames = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const image = "resize/640/-/games/f59/";
  const { data } = useFetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&resize=640`
  );
  return (
    <div className="relative  w-[95%] m-auto">
      <h1 className="py-3 text-3xl font-bold">Juegos Populares</h1>
      <div className="relative flex flex-wrap gap-5 justify-between">
        {data?.map((game) => (
          <div className="relative rounded-md max-w-[300px]  overflow-hidden">
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
