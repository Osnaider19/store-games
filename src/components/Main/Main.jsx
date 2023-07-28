import React from "react";
import { Slider } from "../Slider/Slider";
import { SliderGames } from "../SliderGames/SliderGames";

export const Main = () => {
  return (
    <div className="relative pl-[220px]">
      <Slider />
      <SliderGames />
    </div>
  );
};