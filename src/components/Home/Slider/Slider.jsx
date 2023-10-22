import React from "react";
import { Genres } from "./Genres";
import { RatingStar } from "./RatingStar";
import { BackgroundHome } from "./BackgroundHome";
import { Platforms } from "./Platforms";
import { Date } from "./Date";
import { Link } from "react-router-dom";
import { useGetHome } from "../../../hooks/useGetHome";
import { HiStar } from "react-icons/hi";
import { ScoreColor } from "../../../helpers/ScoreColor";
import { Loader } from "../../Loader/Loader";
export function Slider() {
  const { data, isError , isLoading } = useGetHome();
  const games = data?.games.results;
  return (
    <>
      {isError && <div className="text-4xl">error en obtner los datos</div>}
      <div className="relative top-[60px] h-screen w-full flex  snap-mandatory overflow-hidden">
        {isLoading  && <div className="h-screen w-full flex justify-center items-center">
          <Loader/>
        </div>}
        {games?.slice(19, 20).map((game) => (
          <div key={game.id} className="relative min-w-full snap-x">
            <BackgroundHome background={game.background_image} />
            <div className="flex">
              <div className="relative pt-10 w-[90%] h-full m-auto z-30 ">
                <p className="text-2xl md:text-4xl font-semibold text-white">
                  {game.name}
                </p>
                <Date released={game.released} />
                <div className="text-xl">
                  <div className="flex items-center gap-2 pt-1">
                    <i className="text-xl text-yellow-400">
                      <HiStar />
                    </i>
                    <p>{game.rating}</p>
                  </div>
                </div>
                <Genres genres={game.genres} />
                <Platforms platforms={game.parent_platforms} />
                <div>
                  <p className="text-lg">Metascore</p>
                  <div className="py-1 flex flex-col justify-center items-start">
                    <span
                      className={`text-xl py-1 px-1 border-2 rounded-lg font-semibold`}
                      style={{
                        color: `${ScoreColor(game?.metacritic)}`,
                        border: `2px solid ${ScoreColor(game?.metacritic)}`,
                      }}
                    >
                      {game.metacritic}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to={`/games/${game.id}`}>
                    <span className="bg-red-500 rounded-sm py-2 px-4">See</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
