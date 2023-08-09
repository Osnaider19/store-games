import React, { useEffect } from "react";
import { useFetch } from "../../hooks/useFech";
import { useParams } from "react-router-dom";
import { Card } from "../Card/Card";
import { API_KEY, URL } from "../../config/config";
import { Loader } from "../Loader/Loader";
export const Tags = () => {
  const { name } = useParams();
  const { data, error, isPending, setIsPending } = useFetch(
    `${URL}/games?key=${API_KEY}&tags=${name}`
  );
  useEffect(()=>{
   scrollTo(0 , 0)
  }, [name])
  return (
    <div className="pt-[60px] px-8">
      <h1 className="text-5xl font-semibold capitalize py-2">Games {name.replace(/-/g, ' ')}</h1>
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
    </div>
  );
};
