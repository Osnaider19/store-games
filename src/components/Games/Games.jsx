import React from "react";
import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";
import { Card } from "../Card/Card";

export const Games = () => {
  const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
  return (
    <>
      {data && (
        <div className="px-4">
          {console.log(data.results)}
          <h1 className="text-4xl font-semibold py-4">All games </h1>
          <div className="flex flex-wrap justify-between gap-3">
            {data.results?.map((game) => (
              <div className="max-w-[250px] w-full" key={game.id}>
                <Card
                  capture={game.short_screenshots}
                  date={game.released}
                  genres={game.genres}
                  id={game.id}
                  name={data.name}
                  star={data.rating}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
