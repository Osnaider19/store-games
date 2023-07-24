import React from "react";

export const Genres = ({ genres }) => {
  return (
    <div className=" relative w-full flex gap-2 overflow-hidden">
      {genres?.map((genre) => (
        <a href={genre.id} className="" key={genre.id}>
          <p>{genre.name}</p>
        </a>
      ))}
    </div>
  );
};
