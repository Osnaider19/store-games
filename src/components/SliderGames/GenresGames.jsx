import React from "react";

export const GenresGames = ({genres}) => {
  return (
    <div className="flex  py-1 flex-wrap justify-start w-full">
      {genres.map((genre) => (
        <a href={genre.id} key={genre.id} className="hover:underline pr-2">
          <span>{genre.name}</span>
        </a>
      ))}
    </div>
  );
};
