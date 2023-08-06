import React from "react";
import { useFetch } from "../../../hooks/useFech";
import { URL, API_KEY } from "../../../config/config";
import { Card } from "../../Card/Card";

export const Games = () => {
  const { data } = useFetch(
    `${URL}/games?key=${API_KEY}&dates=2020-01-01,2022-12-31`
  );
  return (
    <div className="relative  w-full m-auto z-50 " style={{
      background:
        "linear-gradient( transparent ,  rgb(18, 18, 18) ,  rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) ,  rgb(18, 18, 18) ,  rgb(18, 18, 18),  rgb(18, 18, 18),  rgb(18, 18, 18) ,  rgb(18, 18, 18))",
    }}>
      
      <div className="relative w-full flex flex-wrap gap-5 justify-between py-5 px-8 -mt-[200px]"> 
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
    </div>
  );
};
