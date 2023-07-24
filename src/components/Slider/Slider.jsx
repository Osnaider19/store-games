import React from "react";
import { useFetch } from "../../hooks/useFech";
import { convertirFecha } from "../../helpers/convertirFecha";
import { Stores } from "./Stores";
import { Genres } from "./Genres";
import { RatingStar } from "./RatingStar";

export function Slider() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data } = useFetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}

      <div className="relative left-0 top-0 h-screen w-full flex overflow-hidden ">
        <div className="fixed left-0 pointer-events-none top-0 h-screen w-full 
        bg-[#00000099]"></div>
        {data?.slice(1, 5).map((game) => (
          <div key={game.id} className="min-w-full ">
            <div
              style={{
                background: `url(${game.background_image})`,
                backgroundPosition: "top left ",
                backgroundSize: "cover",
              }}
              className="w-full h-screen"
            >
              <div className="relative pt-32 w-[90%] h-full m-auto z-30 ">
                <p className="text-4xl">{game.name}</p>

                <div className="relative w-full">
                  <div className="flex py-3 items-center">
                    <p> {convertirFecha(game.released)}</p>
                  </div>
                </div>
                <RatingStar rating={game.rating} votes={game.ratings_count}/>
                <Genres genres={game.genres} />
                <Stores stores={game.stores} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
