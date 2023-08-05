import React, { useContext } from "react";
import { Layout } from "../Layout/Layout";
import { Background } from "./Background";
import { convertirFecha } from "../../helpers/convertirFecha";
import { About } from "./About";
import { Screenshots } from "./Screenshots";
import { Ratings } from "./Ratings";
import { Platfroms } from "./Platfroms";
import { Developers } from "./Developers";
import { Publisher } from "./Publisher";
import { ScoreColor } from "../../helpers/ScoreColor";
import { EsbrRating } from "./EsbrRating";
import { Genres } from "./Genres";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
import { Metacritic } from "./MetaCritic";
import { Title } from "./Title";
import { Achievements } from "./Achievements";
export const GamesDetails = () => {
  const { data } = useContext(ContextDetails);
  return (
    <>
      {console.log(data)}
      {data && (
        <Layout>
          <div className="relative   w-full flex overflow-hidden ">
            <Background />
            <div className="min-w-full px-7 pt-16">
              <div className="relative z-10">
                <div className="relative flex w-full">
                  <div className="flex flex-col w-[70%]">
                    <Title />
                    <Ratings />
                    <Platfroms />
                    <Genres />
                    <div className="flex gap-6 items-start py-2">
                      <Metacritic />
                      <Developers />
                      <Publisher />
                    </div>
                    <EsbrRating />
                  </div>
                </div>
                <About about={data.description} />
                <Screenshots id={data.id} />
                <Achievements/>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
