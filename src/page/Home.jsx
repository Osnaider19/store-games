import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Slider } from "../components/Slider/Slider";
import { SliderGames } from "../components/SliderGames/SliderGames";

export const Home = () => {
  return (
    <Layout>
      <Slider />
      <SliderGames />
    </Layout>
  );
};
