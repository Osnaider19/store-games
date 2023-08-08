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
import { Achievements } from "./Achievements";
import { Loader } from "../Loader/Loader";
export const GamesDetails = () => {
  const { data, isPending } = useContext(ContextDetails);
  return (
    <>
      {console.log(data)}
      {isPending && <Loader />}
      {data && (
        <>
          <div className="relative  w-full flex overflow-hidden  h-full pt-[55px]">
            <div className="relative min-w-full  h-full ">
            <Background />
              <div className="relative z-50">
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
                {/* <Achievements /> */}
                <div className="bg-[#171414] w-full px-7 py-3 hidden">
                It is a new beginning for Kratos. Living as a man outside the shadow of the gods, he ventures into the brutal Norse wilds with his son Atreus, fighting to fulfill a deeply personal quest.

His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… And teach his son to do the same. This startling reimagining of God of War deconstructs the core elements that defined the series—satisfying combat; breathtaking scale; and a powerful narrative—and fuses them anew.

Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.

From the marble and columns of ornate Olympus to the gritty forests, mountains, and caves of Pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters, and gods. With an added emphasis on discovery and exploration, the world will draw players in to explore every inch of God of War’s breathtakingly threatening landscape—by far the largest in the franchise.

With an over the shoulder free camera that brings the player closer to the action than ever before, fights in God of War mirror the pantheon of Norse creatures Kratos will face: grand, gritty, and grueling. A new main weapon and new abilities retain the defining spirit of God of War while presenting a vision of violent conflict that forges new ground in the genre
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
