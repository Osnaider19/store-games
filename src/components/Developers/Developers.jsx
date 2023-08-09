import React from "react";
import { useParams } from "react-router-dom";
import { API_KEY, URL } from "../../config/config";
import { useFetch } from "../../hooks/useFech";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
export const Developers = () => {
  const { name } = useParams();
  const { data, error, isPending, setIsPending } = useFetch(
    `${URL}/developers/${name}?key=${API_KEY}`
  );
  const { data: games, isPending: isPendinggames } = useFetch(
    `${URL}/games?key=${API_KEY}&developers=${name}`
  );
  return (
    <>
      {console.log(data)}
      {console.log(games)}
      {data && (
        <div className="pt-[60px] px-8 py-3">
          <div>
            <h1 className="text-5xl font-semibold">Developed by {data.name}</h1>
          </div>
          {isPendinggames && <Loader />}
          <div className="flex flex-wrap w-full gap-3 justify-between py-10">
            {games?.results?.map((game) => (
              <div
                className="relative  max-w-[250px] h-full min-w-[250px]  overflow-hidden hover:-translate-y-3 transition-transform duration-200"
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
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
