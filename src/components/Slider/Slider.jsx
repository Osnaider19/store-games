import React from "react";
import { useFetch } from "../../hooks/useFech";
import { Genres } from "./Genres";
import { RatingStar } from "./RatingStar";
import { FechaUpdateLaunch } from "./FechaUpdateLaunch";
import { API_KEY, URL } from "../../config/config";
import { BackgroundHome } from "./BackgroundHome";
import { Platforms } from "./Platforms";
export function Slider() {
  const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}
      <div className="relative top-[60px] h-screen w-full flex overflow-hidden ">
        {data?.results.slice(1, 2).map((game) => (
          <>
            <BackgroundHome background={game.background_image} />
            <div key={game.id} className="min-w-full ">
              <div className="flex">
                <div className="relative pt-10 w-[90%] h-full m-auto z-30 ">
                  <p className="text-4xl font-semibold text-white">
                    {game.name}
                  </p>
                  <FechaUpdateLaunch released={game.released} />
                  <div className="text-xl">
                    <RatingStar
                      rating={game.rating}
                      votes={game.ratings_count}
                    />
                  </div>
                  <Genres genres={game.genres} />
                  <Platforms platforms={game.parent_platforms} />
                  <div>
                    <h3>Metascore</h3>
                    <div>{game.metacritic}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
