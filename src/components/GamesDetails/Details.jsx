import React from "react";
import { ContextDetailsProvider } from "../../Context/contextDetails/ContextDetails";
import { GamesDetails } from "./GamesDetails";

export const Details = () => {
  return (
    <ContextDetailsProvider>
      <GamesDetails />
    </ContextDetailsProvider>
  );
};
