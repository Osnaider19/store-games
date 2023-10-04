import React from "react";
import { Link } from "react-router-dom";
export const GenresGames = ({ genres }) => {
  return (
    <div className="flex  py-1 flex-wrap justify-start w-full h-[56px] overflow-hidden ">
      {genres?.map((genre) => (
        <Link
          to={`/genres/${genre.slug}`}
          key={genre.id}
          className="hover:underline pr-2 "
        >
          <span className="line-clamp-2">{genre.name}</span>
        </Link>
      ))}
    </div>
  );
};
