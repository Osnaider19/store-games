import React from "react";
import { Link } from "react-router-dom";
import { convertirFecha } from "../../helpers/convertirFecha";
export const CardSearch = ({ games , setInput }) => {
  return (
    <>
      {games?.map((game) => (
        <Link
          to={`/games/${game.id}`}
          className="w-full rounded-lg overflow-hidden hover:bg-black/50"
          key={game.id}
          onClick={()=>{
            setInput("")
          }}
        >
          <div className="relative flex  gap-3 min-w-full ">
            <div className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] ">
              <img
                src={game.background_image?.replace(
                  "media/",
                  `media/resize/420/-/`
                )}
                alt=""
                loading="lazy"
                className="min-h-full min-w-full object-cover rounded-lg overflow-hidden"
              />
            </div>
            <div>
              <p>{game.name}</p>
              <span>{convertirFecha(game.released)}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
