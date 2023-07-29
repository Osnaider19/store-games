import React, { useEffect } from "react";
import { Layout } from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFech";
import { URL } from "../../config/config";
import { API_KEY } from "../../config/config";
import { Card } from "../Card/Card";
import { LoaderCard } from "../Loader/LoaderCard";
export const Genres = () => {
  const { name } = useParams();
  const { data , error , isPending , setIsPending } = useFetch(`${URL}/games?key=${API_KEY}&genres=${name}`);

  useEffect(() => {
    scrollTo(0, 0);
    setIsPending(true)
  }, [name]);
  return (

    <Layout>
      {console.log(data)}
      
      <div className="px-5">
        <h1 className="py-3 text-4xl font-bold">Juegos de {name}</h1>
        {isPending && <LoaderCard/>}
        <div className="flex flex-wrap w-full gap-3 justify-between">
          {data?.results.map((game) => (
            <div
              className="relative rounded-lg max-w-[350px] h-full min-w-[270px]  overflow-hidden "
              key={game.id}
            >
              <Card
                capture={game.short_screenshots}
                name={game.name}
                id={game.id}
                genres={game.genres}
                star={game.rating}
                date={game.released}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};