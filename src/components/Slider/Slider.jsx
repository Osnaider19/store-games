import React from "react";
import { useFetch } from "../../hooks/useFech";
import { Genres } from "./Genres";
import { RatingStar } from "./RatingStar";
import { FechaUpdateLaunch } from "./FechaUpdateLaunch";
import { SliderScreenshots } from "./SliderScreenshots";

export function Slider() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data } = useFetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}

      <div className="relative  h-screen w-full flex overflow-hidden ">
        <div
          className="fixed left-0 pointer-events-none top-0 h-screen w-full 
        bg-[#00000099]"
        ></div>
        {data?.results.slice(1, 5).map((game) => (
          <div key={game.id} className="min-w-full ">
            <div
              style={{
                background: `url(${game.background_image})`,
                backgroundPosition: "top left ",
                backgroundSize: "cover",
              }}
              className="w-full h-screen"
            >
              <div className="flex">
              <div className="relative pt-20 w-[90%] h-full m-auto z-30 ">
                <p className="text-4xl font-semibold">{game.name}</p>
                <FechaUpdateLaunch
                  released={game.released}
                  updated={game.updated}
                />
                <RatingStar rating={game.rating} votes={game.ratings_count} />
                <Genres genres={game.genres} />
              </div>
              </div>
              <div>
                <SliderScreenshots images={game.short_screenshots}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
