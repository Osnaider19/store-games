import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { ContextGames } from "../../Context/ContextGames/ContextGames";
import { useContext, useEffect } from "react";
import { HeaderFilters } from "./HeaderFilters";
export const Games = () => {
  const { data, isPending, page, setPage } = useContext(ContextGames);
  useEffect(()=>{
   scrollTo(0 , 0)
  }, [page])
  return (
    <>
      <div className="px-4">
        {console.log(data)}
        <HeaderFilters />
        {isPending && <Loader />}
        <div className="flex flex-wrap justify-between gap-3">
          {data?.results?.map((game) => (
            <div
              className="relative  max-w-[250px] h-full min-w-[250px]  overflow-hidden hover:-translate-y-3 transition-transform duration-200"
              key={game.id}
            >
              <Card
                img={game.background_image}
                date={game.released}
                genres={game.genres}
                id={game.id}
                name={game.name}
                rating={game.rating}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-5">
          {data?.next && (
            <button
              className="py-3 px-5 bg-red-600"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              ver mas
            </button>
          )}
        </div>
      </div>
    </>
  );
};
