import React from "react";
import { SliderCapture } from "../SliderGames/SliderCapture";
import { Star } from "../SliderGames/Star";
import { convertirFecha } from "../../helpers/convertirFecha";
import { GenresGames } from "../SliderGames/GenresGames";
export const Card = ({ capture, name, star, genres, date }) => {
  return (
    <div>
      <SliderCapture capture={capture} />
      <div>
        <p className="text-xl">{name}</p>
      </div>
      <Star rating={star} />
      <GenresGames genres={genres} />
      <div>
        <p>{convertirFecha(date)}</p>
      </div>
    </div>
  );
};
