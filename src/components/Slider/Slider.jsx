import React from "react";
import { useFetch } from "../../hooks/useFech";
export function Slider() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data } = useFetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}

      <div className="absolute left-0 top-0 h-screen w-full">
        <div className="absolute left-0 top-0 h-screen w-full bg-[#00000080]"></div>
        {data?.map((game) => (
          <div key={game.id}>
            <div
              style={{
                background: `url(${game.background_image})`,
                backgroundPosition: "top left ",
                backgroundSize: "cover",
              }}
              className="w-full h-screen"
            >
              <div className="relative pt-32 w-[90%] m-auto z-30 ">
                <p className="text-4xl">{game.name}</p>
                {data.genres?.map((genre) => (
                  <div className="bg-red-500 px-4 relative">
                    <p>{genre.name}</p>
                    <img src={genre.image_background} alt="" />
                  </div>
                ))}
              </div>
              <div className="relative">
                <p>{data?.released}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
