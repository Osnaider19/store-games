import React from "react";

export const Genres = ({ genres }) => {
  return (
    <>
      <h2 className="font-semibold">Generos</h2>
      <div className=" relative w-full flex gap-2 overflow-hidden">
        {genres?.map((genre) => (
          <a href={genre.id} className="hover:underline" key={genre.id} >
            <p>{genre.name}</p>
          </a>
        ))}
      </div>
    </>
  );
};
