import React from "react";
import { Link } from "react-router-dom";
export const Genres = ({ genres }) => {
  return (
    <>
      <h2 className="text-lg md:text-xl">Genres</h2>
      <div className=" relative w-full flex gap-2 overflow-hidden">
        {genres?.map((genre) => (
          <Link to={`genres/${genre.slug}`} className="hover:underline" key={genre.id}>
            <p className="py-1">{genre.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
