import React from "react";

import { Games } from "./GamesHome/Games";
import { Genres } from "./Genres";
import { Slider } from "./Slider/Slider";

export const Home = () => {
  return (
    <>
      <Slider />
      <Games />
      <Genres />
    </>
  );
};
