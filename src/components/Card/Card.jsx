import React from "react";
import { SliderCapture } from "../SliderGames/SliderCapture";
import { Star } from "../SliderGames/Star";
import { convertirFecha } from "../../helpers/convertirFecha";
import { GenresGames } from "../SliderGames/GenresGames";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
export const Card = ({ capture, name, id, genres, date, rating }) => {
  return (
    <div className="pb-7 border rounded-lg">
      <SliderCapture capture={capture} />
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
