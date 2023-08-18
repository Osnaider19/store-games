import React, { useContext, useEffect } from "react";
import { Background } from "./Background";
import { About } from "./About";
import { Screenshots } from "./Screenshots";
import { Ratings } from "./Ratings";
import { ParentPlatfroms } from "./ParentPlatfroms";
import { Developers } from "./Developers";
import { Publisher } from "./Publisher";
import { EsbrRating } from "./EsbrRating";
import { Genres } from "./Genres";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
import { Metacritic } from "./MetaCritic";
import { Title } from "./Title";
import { Loader } from "../Loader/Loader";
import { ModalScreenshots } from "../Modals/ModalScreenshots";
import { ContextScreen } from "../../Context/ContextScreen/ContextScreen";
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
export const GamesDetails = () => {
  const { id } = useParams();
  const { data, isPending } = useContext(ContextDetails);
  const { stateModal } = useContext(ContextScreen);
  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);
  return (
    <>
      {/* {console.log(data)} */}
      {isPending && <Loader />}
      {data && (
        <>
          <div className="relative w-full h-full bg-[#181818]">
            <div className="relative  w-full flex overflow-hidden  h-full pt-[55px]">
              <div className="relative min-w-full  h-full ">
                <Background />
                <div className="relative z-30">
                  <div className="relative flex w-full px-4 md:px-8">
                    <div className="flex flex-col w-full">
                      <Title />
                      <Ratings />
                      <ParentPlatfroms />
                      <Genres />
                      <div className="flex gap-6 items-start py-4 flex-wrap">
                        <Metacritic />
                        <Developers />
                        <Publisher />
                      </div>
                      <EsbrRating />
                    </div>
                  </div>
                  <div className="px-4 md:px-8">
                    <div className="flex flex-col gap-3 justify-center items-start mt-10 py-5 lg:flex-row">
                      <div className="lg:w-[50%]">
                        <About about={data.description} />
                      </div>
                      <div className="lg:w-[50%] md:px-5">
                        <ShoppingStore />
                        <Tags />
                        <Platforms />
                        <Website />
                      </div>
                    </div>
                    <Screenshots id={data.id} />
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
              {stateModal && <ModalScreenshots />}
             
            </div>
          </div>
        </>
      )}
    </>
  );
};
