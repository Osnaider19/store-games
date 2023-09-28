import React from "react";
import { Link } from "react-router-dom";
import "./creators.css";
import { BackgroundCreators } from "./BackgroundCreators";
import { useGamesDetails } from "../../../hooks/useGamesDetails";
export const Creators = () => {
  const { data } = useGamesDetails();
  const creators = data.creator.results
  return (
    <div className="">
      {/* {console.log(data)} */}

      {creators?.length !== 0 && (
        <div className="w-full relative ">
          <h4 className="text-3xl py-4 font-semibold">Creators</h4>
          <ul className="flex min-w-full relative  items-center overflow-hidden gap-7 overflow-x-auto container__creators">
            {creators?.map((creator) => (
              <li
                className="relative px-3 mb-4 py-7 flex flex-col justify-center items-center  max-w-[300px] min-w-[300px] rounded-xl overflow-hidden border border-[#ffffff20] "
                key={creator.id}
              >
                <BackgroundCreators background={creator.image_background} />
                <div className="flex flex-col justify-center items-center w-full z-10">
                  <span className="py-3 font-semibold text-lg">
                    {creator.name}
                  </span>
                  <div className="relative max-w-[110px] max-h-[110px] min-h-[110px] w-full h-full overflow-hidden rounded-full ">
                    <img
                      src={
                        creator.image
                          ? creator?.image?.replace(
                              "media/",
                              `media/resize/420/-/`
                            )
                          : "../../../../usuario.png"
                      }
                      className="w-full min-h-full h-full object-cover"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="py-2 flex flex-wrap gap-3 ">
                    {creator?.positions?.map((position) => (
                      <div key={position.id}>{position.name}</div>
                    ))}
                  </div>
                  <div className="w-full">
                    <p className="text-lg font-semibold">Known for</p>
                    <div className="flex flex-col py-1  w-full">
                      {creator?.games?.map((game) => (
                        <Link to={`/games/${game.id}`} key={game.id}>
                          <span className="text-sm hover:opacity-80 hover:underline">
                            {game.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
