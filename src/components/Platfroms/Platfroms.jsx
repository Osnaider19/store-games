import React from "react";
import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";
import { useParams } from "react-router-dom";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import { Loader } from "../Loader/Loader";
export const Platfroms = () => {
  const { name } = useParams();
  const { data, isPending , setIsPending} = useFetch(
    `${URL}/games?key=${API_KEY}&platforms=${name}`
    
  );
  useEffect(()=>{
   setIsPending(true)
  }, [name])
  return (
    <>
      {isPending && <Loader />}
      {console.log(data)}
      <div className="relative pt-[60px] px-8">
        <ul className="flex flex-wrap justify-between">
          {data?.results?.map((game) => (
            <li
              key={game.id}
              className="relative  max-w-[250px] h-full min-w-[250px]  overflow-hidden hover:-translate-y-3 transition-transform duration-200"
            >
              <Card
                date={game.released}
                genres={game.genres}
                id={game.id}
                img={game.background_image}
                name={game.name}
                rating={game.rating}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
