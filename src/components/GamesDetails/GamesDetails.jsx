import React, { useContext } from "react";
import { Background } from "./Background";
import { About } from "./About";
import { Screenshots } from "./Screenshots";
import { Ratings } from "./Ratings";
import { Platfroms } from "./Platfroms";
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
export const GamesDetails = () => {
  const { data, isPending } = useContext(ContextDetails);
  const { stateModal } = useContext(ContextScreen);
  return (
    <>
      {console.log(data)}
      {isPending && <Loader />}
      {data && (
        <>
          <div className="relative  w-full flex overflow-hidden  h-full pt-[55px]">
            <div className="relative min-w-full  h-full ">
              <Background />
              <div className="relative z-30">
                <div className="relative flex w-full px-7">
                  <div className="flex flex-col w-[70%]">
                    <Title />
                    <Ratings />
                    <Platfroms />
                    <Genres />
                    <div className="flex gap-6 items-start py-4">
                      <Metacritic />
                      <Developers />
                      <Publisher />
                    </div>
                    <EsbrRating />
                  </div>
                </div>
                <div className="flex gap-3 justify-center items-center px-7 bg-[#181818] mt-10 ">
                  <div className="w-[50%]">
                    <About about={data.description} />
                  </div>
                  <div className="w-[50%]">
                    <Screenshots id={data.id} />
                  </div>
                </div>
                <div className="w-full px-7 py-7"></div>
                {/* <Achievements /> */}
              </div>
            </div>
          {stateModal && <ModalScreenshots />}
          {console.log(stateModal)}
          </div>
        </>
      )}
    </>
  );
};
