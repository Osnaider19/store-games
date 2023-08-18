import React from "react";
import { ContextBestYearProvider } from "../../Context/contextBestyear/ContextBestYear";
import { BestYears } from "./BestYears";

export const BestYearPage = () => {
  return (
    <ContextBestYearProvider>
      <BestYears />
    </ContextBestYearProvider>
  );
};
