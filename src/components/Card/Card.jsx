import React from "react";
import { SliderCapture } from "../SliderGames/SliderCapture";
import { Star } from "../SliderGames/Star";
import { convertirFecha } from "../../helpers/convertirFecha";
import { GenresGames } from "../SliderGames/GenresGames";
import { Link } from "react-router-dom";
export const Card = ({ capture, name, id, star, genres, date }) => {
  return (
    <div>
      <SliderCapture capture={capture} />
      <div>
        <Link to={`/games/${id}`} className="font-semibold hover:opacity-80">
          <p className="text-xl py-1">{name}</p>
        </Link>
      </div>
      <Star rating={star} />
      <GenresGames genres={genres} />
      <div>
        <p>{convertirFecha(date)}</p>
      </div>
    </div>
  );
};
