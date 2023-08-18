import React from "react";
import { ContextGenresProvider } from "../../Context/ContextGenres/ContextGenres";
import { Genres } from "./Genres";

export const GenresPage = () => {
  return (
    <ContextGenresProvider>
      <Genres />
    </ContextGenresProvider>
  );
};
