import React from "react";
import { Link } from "react-router-dom";

export const Genres = ({ genres }) => {
  return (
    <>
      {genres && (
        <div>
          <h3 className="text-lg font-semibold">Genres</h3>
          <div className="flex gap-3">
            {genres.map((genre) => (
              <Link to={`/genres/${genre.slug}`}>
                <span className="hover:underline">{genre.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
