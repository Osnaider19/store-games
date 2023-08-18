import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { ContextGames } from "../../Context/ContextGames/ContextGames";
import { useContext, useEffect } from "react";
import { NoResults } from "./NoResults";
import { Error } from "../Errors/Error";
import { Footer } from "../Footer/Footer";
import { Pagination } from "../Pagination/Pagination";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
export const Games = () => {
  const {
    data,
    isPending,
    page,
    updateOrdering,
    error,
    paginationNext,
    paginationPrevious,
    updateDate,
  } = useContext(ContextGames);
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  return (
    <>
      <div className="px-4 py-4">
        {/* {console.log(data)} */}
        <div className="flex flex-col justify-between sm:flex-row">
          <h1 className="text-4xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
            All games
          </h1>
          <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5">
            <FiltersOrdering updateFilters={updateOrdering} />
            <FiltersDate updateDate={updateDate} />
          </div>
        </div>

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
          paginationNext={paginationNext}
          paginationPrevious={paginationPrevious}
        />
        <Footer />
      </div>
    </>
  );
};
