import React from "react";
import { useFetch } from "../../hooks/useFech";

export const SliderGames = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const image = "resize/640/-/games/f59/";
  const { data } = useFetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
  return (
    <div className="relative  w-[95%] m-auto">
      {console.log(data)}
      <h1>Games</h1>

      <div className="relative flex flex-wrap gap-5 justify-between">
        {data?.map((game) => (
          <div className="relative rounded-md overflow-hidden bg-slate-900">
            <div className="relative w-full flex  flex-nowrap max-w-[300px] h-[350px] overflow-hidden">
              {game.short_screenshots?.map((capture) => (
                <div className="min-w-full min-h-full">
                  <div>
                    <img
                      src={capture.image}
                      alt=""
                      className="w-full min-w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p>{game.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
