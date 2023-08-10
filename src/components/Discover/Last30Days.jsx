import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";
import { last30Days } from "../../helpers/last30Days";
import { Card } from "../Card/Card";
import { useState } from "react";
import { Loader } from "../Loader/Loader";
export const Last30Days = () => {
  const [page, setPage] = useState(1);
  const { data, isPending, error, setIsPending } = useFetch(
    `${URL}/games?key=${API_KEY}&dates=${last30Days()}&page=${page}`
  );
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  return (
    <div className="pt-[60px] h-full w-full">
      {console.log(data)}
      <div>
        <div className="px-8">
          <h1 className="text-5xl font-semibold">Last 30 days</h1>
          {isPending && <Loader />}
          <div className="flex flex-wrap w-full gap-3 justify-between py-10">
            {data?.results.map((game) => (
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
          <div className="flex w-full justify-center items-center  py-5">
            {data?.next && (
              <button
                className="bg-red-600 px-4 py-1"
                onClick={() => {
                  setPage(page + 1), setIsPending(true);
                }}
              >
                ver mas
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
