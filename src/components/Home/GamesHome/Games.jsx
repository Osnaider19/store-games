import React from "react";
import { useFetch } from "../../../hooks/useFech";
import { URL, API_KEY } from "../../../config/config";
import { Card } from "../../Card/Card";
import { LoaderCard } from "../../Loader/LoaderCard";

export const Games = () => {
  const { data , isPending} = useFetch(
    `${URL}/games?key=${API_KEY}&dates=2020-01-01,2022-12-31`
  );
  return (
    <div className="relative  w-full m-auto z-30 " style={{
      background:
        "linear-gradient( transparent ,  rgb(18, 18, 18) ,  rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) ,  rgb(18, 18, 18) ,  rgb(18, 18, 18),  rgb(18, 18, 18),  rgb(18, 18, 18) ,  rgb(18, 18, 18))",
    }}>
      
      <div className="relative px-4 w-full flex flex-wrap gap-1 md:gap-5 justify-between py-5 md:px-8 -mt-[300px] md:-mt-[200px]"> 
      {isPending && <LoaderCard/>}
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
  );
};
