import React from "react";
import { Games } from "./GamesHome/Games";
import { Genres } from "./Genres";
import { Slider } from "./Slider/Slider";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <Slider />
      <Games />
      <Genres />
      <div className="px-4 md:px-8">
      <Footer/>
      </div>
    </>
  );
};
