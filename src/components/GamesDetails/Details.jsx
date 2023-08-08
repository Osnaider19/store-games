import React from "react";
import { ContextDetailsProvider } from "../../Context/contextDetails/ContextDetails";
import { GamesDetails } from "./GamesDetails";
import { ContextScreenProvider } from "../../Context/ContextScreen/ContextScreen";

export const Details = () => {
  return (
    <ContextDetailsProvider>
      <ContextScreenProvider>
        <GamesDetails />
      </ContextScreenProvider>
    </ContextDetailsProvider>
  );
};
