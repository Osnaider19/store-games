import React from "react";
import { useFetch } from "../../../hooks/useFech";
import { URL, API_KEY } from "../../../config/config";
import { useParams } from "react-router-dom";
import { Card } from "../../Card/Card";
export const Series = () => {
  const { id } = useParams();
  const { data } = useFetch(`${URL}/games/${id}/game-series?key=${API_KEY}`);
  return (
    <>
      {data?.results?.length !== 0 && (
        <div className="relative w-full h-full">
          <div>
            <h4 className="text-xl md:text-3xl py-4 font-semibold capitalize">
            games of the same series
            </h4>
            <ul className="flex flex-wrap justify-center w-full gap-5 md:gap-3 sm:justify-between sm:gap-1">
              {data?.results?.map((game) => (
                <li
                  className="relative w-full  max-w-[170px]  md:max-w-[250px] h-full md:min-w-[250px] overflow-hidden hover:-translate-y-3 transition-transform duration-200"
                  key={game.id}
                >
                  <Card
                    img={game.background_image}
                    name={game.name}
                    id={game.id}
                    genres={game.genres}
                    rating={game.rating}
                    date={game.released}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
