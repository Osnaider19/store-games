import React from "react";
import { Link } from "react-router-dom";
export const Genres = ({ genres }) => {
  return (
    <>
      <h2 className="font-semibold">Generos</h2>
      <div className=" relative w-full flex gap-2 overflow-hidden">
        {genres?.map((genre) => (
          <Link to={`genres/${genre.slug}`} className="hover:underline" key={genre.id}>
            <p>{genre.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
