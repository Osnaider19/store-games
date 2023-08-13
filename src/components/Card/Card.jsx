import React from "react";
import { convertirFecha } from "../../helpers/convertirFecha";
import { GenresGames } from "../Home/GamesHome/GenresGames";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
export const Card = ({ img, name, id, genres, date, rating }) => {
  return (
    <div className="relative pb-7 rounded-md  overflow-hidden">
      <div>
        <img
          src={img?.replace("media/", `media/resize/420/-/`)}
          alt=""
          loading="lazy"
          className="w-full h-full min-h-[205px] max-h-[205px] min-w-full object-cover"
        />
      </div>
      <div className="px-2">
        <div>
          <Link to={`/games/${id}`} className="font-semibold hover:opacity-80">
            <p className="text-xl py-1">{name}</p>
          </Link>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <i className="text-xl text-yellow-400">
            <HiStar />
          </i>
          <p>{rating}</p>
        </div>
        <GenresGames genres={genres} />
        <div>
          <p>{convertirFecha(date)}</p>
        </div>
      </div>
    </div>
  );
};
