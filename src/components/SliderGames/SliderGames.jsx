import React from "react";
import { useFetch } from "../../hooks/useFech";

export const SliderGames = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const image = "resize/640/-/games/f59/";
  const { data } = useFetch(`https://api.rawg.io/api/games?key=${API_KEY}&media=${image}`);
  return (
    <div className="relative  w-[95%] m-auto">
      {console.log(data)}
      <h1>Games</h1>

      <div className="relative flex flex-wrap gap-1">
        {data?.map((game) => (
          <a href="" key={game.id} className="max-w-[210px]">
            <div className="relative rounded-md overflow-hidden bg-slate-900">
              <div className="relative w-full  max-w-[210px] h-[250px] overflow-hidden">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="max-w-full max-h-full min-w-full min-h-full object-cover"
                />
              </div>
              <div>
                <p>{game.name}</p>
              </div>
              <div>
                {game.short_screenshots?.map((capture)=>(
                    <img src={capture.image} alt="" />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
