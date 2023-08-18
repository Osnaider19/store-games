import React from "react";
import { useFetch } from "../../../hooks/useFech";
import { URL, API_KEY } from "../../../config/config";
import { Card } from "../../Card/Card";
import { LoaderCard } from "../../Loader/LoaderCard";
import { Slider } from "../Slider/Slider";
import { Error } from "../../Errors/Error";

export const Games = () => {
  const { data, isPending, error } = useFetch(
    `${URL}/games?key=${API_KEY}`
  );
  return (
    <>
      <Slider data={data} error={error} />
      <div
        className="relative  w-full m-auto z-30 "
        style={{
          background:
            "linear-gradient( transparent ,  rgb(18, 18, 18) ,  rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) ,  rgb(18, 18, 18) ,  rgb(18, 18, 18),  rgb(18, 18, 18),  rgb(18, 18, 18) ,  rgb(18, 18, 18))",
        }}
      >
        <div className="relative px-4 w-full flex flex-wrap gap-1 md:gap-5 justify-between py-5 md:px-8 -mt-[300px] md:-mt-[200px]">
          {isPending && <LoaderCard />}
          {error && <Error status={error.status} statusText={error.statusText} />}
          {data?.results.map((game) => (
            <div
              className="relative w-full max-w-[170px]  md:max-w-[250px] h-full md:min-w-[250px] overflow-hidden hover:-translate-y-3 transition-transform duration-200"
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
    </>
  );
};
