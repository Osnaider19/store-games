import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";

export const Genres = () => {
  const { data } = useContext(ContextDetails);
  const { genres } = data;
  return (
    <>
      {genres && (
        <div>
          <h3 className="text-lg">Genres</h3>
          <div className="flex gap-3 md:max-w-[50%] flex-wrap">
            {genres.map((genre) => (
              <Link to={`/genres/${genre.slug}`} key={genre.id}>
                <span className="hover:underline">{genre.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
