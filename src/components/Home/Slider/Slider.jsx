import React from "react";
import { useFetch } from "../../../hooks/useFech";
import { Genres } from "./Genres";
import { RatingStar } from "./RatingStar";
import { BackgroundHome } from "./BackgroundHome";
import { Platforms } from "./Platforms";
import { Date } from "./Date";
import { Link } from "react-router-dom";
import { API_KEY, URL } from "../../../config/config";
export function Slider() {
  const { data, error } = useFetch(`${URL}/games?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}
      {console.log(error?.statusText)}
      <div className="relative top-[60px] h-screen w-full flex  snap-mandatory ">
        {error && <div className="text-4xl">{error.status}{error.statusText}</div>}
        {data?.results.slice(16, 17).map((game) => (
          <div key={game.id} className="relative min-w-full snap-x">
            <BackgroundHome background={game.background_image} />
            <div className="flex">
              <div className="relative pt-10 w-[90%] h-full m-auto z-30 ">
                <p className="text-2xl md:text-4xl font-semibold text-white">{game.name}</p>
                <Date released={game.released} />
                <div className="text-xl">
                  <RatingStar rating={game.rating} votes={game.ratings_count} />
                </div>
                <Genres genres={game.genres} />
                <Platforms platforms={game.parent_platforms} />
                <div>
                  <h3>Metascore</h3>
                  <div>{game.metacritic}</div>
                </div>
                <div className="pt-4">
                  <Link to={`/games/${game.id}`}>
                    <span className="bg-red-500 rounded-sm py-2 px-4">See</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
