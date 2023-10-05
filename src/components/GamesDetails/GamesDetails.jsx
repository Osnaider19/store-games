import React, { useEffect, useState } from "react";
import { Background } from "./Background";
import { About } from "./About";
import { Screenshots } from "./Screenshots";
import { Ratings } from "./Ratings";
import { ParentPlatfroms } from "./ParentPlatfroms";
import { Developers } from "./Developers";
import { Publisher } from "./Publisher";
import { EsbrRating } from "./EsbrRating";
import { Genres } from "./Genres";
import { Metacritic } from "./MetaCritic";
import { Title } from "./Title";
import { Loader } from "../Loader/Loader";
import { ModalScreenshots } from "../Modals/ModalScreenshots";
import { ShoppingStore } from "./ShoppingStore";
import { Requirements } from "./Requirements";
import { Tags } from "./Tags";
import { Footer } from "../Footer/Footer";
import { Achievements } from "./Achievements";
import { Platforms } from "./Platforms";
import { Creators } from "./Creators/Creators";
import { useParams } from "react-router-dom";
import { Series } from "./Series/Series";
import { Website } from "./Website";
import { useGamesDetails } from "../../hooks/useGamesDetails";
export const GamesDetails = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGamesDetails(id);

  useEffect(() => {
    scrollTo(0, 0);
    refetch();
  }, [id]);
  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <>
          <div className="relative w-full h-full bg-[#181818]">
            <div className="relative  w-full flex overflow-hidden  h-full pt-[55px]">
              <div className="relative min-w-full  h-full ">
                <Background />
                <div className="relative z-30  h-full">
                  <div className="relative flex w-full flex-col md:px-8 ">
                    <div className="flex flex-col w-full px-4 md:px-0">
                      <Title />
                      <Ratings />
                      <ParentPlatfroms />
                      <Genres />
                    </div>
                    <div className="flex gap-6 items-start py-4 flex-wrap h-full px-4 md:px-0 bg-[#181818] md:bg-transparent">
                      <Metacritic />
                      <Developers />
                      <Publisher />
                    </div>
                    <EsbrRating />
                  </div>
                  <div className="px-4 md:px-8 bg-[#181818]">
                    <div className="flex flex-col gap-3 justify-center items-start md:mt-10 py-5 lg:flex-row">
                      <div className="lg:w-[50%]">
                        <About />
                      </div>
                      <div className="lg:w-[50%] md:px-5">
                        <ShoppingStore />
                        <Tags />
                        <Platforms />
                        <Website />
                      </div>
                    </div>
                    <Screenshots id={data?.details.id} />
                    <Achievements />
                    <Requirements />
                    <div>
                      <Creators />
                      <Series />
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
