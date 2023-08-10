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
          <div className="relative flex  gap-2 min-w-full ">
            <div className="">
              <img
                src={game.background_image?.replace(
                  "media/",
                  `media/resize/420/-/`
                )}
                alt=""
                loading="lazy"
                className="w-[100px] h-[100px] object-cover rounded-lg overflow-hidden"
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
