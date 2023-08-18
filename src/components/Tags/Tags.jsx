import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { ContextTags } from "../../Context/ContextTags/ContextTags";
import { Pagination } from "../Pagination/Pagination";
import { Footer } from "../Footer/Footer";
import { Error } from "../Errors/Error";
import { NoResults } from "../Games/NoResults";
export const Tags = () => {
  const { name } = useParams();
  const {
    data,
    isPending,
    error,
    page,
    updateOrdering,
    paginationNext,
    paginationPrevious,
    updateDate,
  } = useContext(ContextTags);
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  return (
    <div className="pt-[60px] px-8">
      <div className="flex flex-col justify-between sm:flex-row">
        <h1 className="text-2xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
          Games {name.replace(/-/g, " ")}
        </h1>
        <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5">
          <FiltersOrdering updateFilters={updateOrdering} />
          <FiltersDate updateDate={updateDate} />
        </div>
      </div>
      {isPending && <Loader />}
      {data?.results?.length <= 0 && <NoResults />}
      {error && <Error status={error.status} statusText={error.statusText} />}
      <div className="flex flex-wrap justify-center gap-3 py-10 sm:justify-between">
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
      <Pagination
        next={data?.next}
        previous={data?.previous}
        paginationNext={paginationNext}
        paginationPrevious={paginationPrevious}
      />
      <Footer />
    </div>
  );
};
