import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { ContextGames } from "../../Context/ContextGames/ContextGames";
import { useContext, useEffect } from "react";
import { HeaderFilters } from "./HeaderFilters";
import { NoResults } from "./NoResults";
import { Error } from "../Errors/Error";
import { Footer } from "../Footer/Footer";
import { Pagination } from "../Pagination/Pagination";
export const Games = () => {
  const { data, dataGames, isPending, setIsPending, page, setPage, error } =
    useContext(ContextGames);
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  return (
    <>
      <div className="px-4 py-4">
        {console.log(data)}
        {console.log(dataGames)}
        <HeaderFilters />
        {isPending && <Loader />}
        {data?.results?.length <= 0 && <NoResults />}
        {error && <Error status={error.status} statusText={error.statusText} />}
        <div className="flex flex-wrap justify-center gap-3 sm:justify-between">
          {data?.results?.map((game) => (
            <div
              className="relative w-full max-w-[170px]  md:max-w-[250px] h-full md:min-w-[250px] overflow-hidden hover:-translate-y-3 transition-transform duration-200"
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
        <Pagination
          next={data?.next}
          previous={data?.previous}
          page={page}
          setIsPending={setIsPending}
          setPage={setPage}
        />
        <Footer />
      </div>
    </>
  );
};
