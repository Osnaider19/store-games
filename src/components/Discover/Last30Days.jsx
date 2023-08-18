import { useContext, useEffect } from "react";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { Pagination } from "../Pagination/Pagination";
import { Footer } from "../Footer/Footer";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { ContextLastDays } from "../../Context/contextLastDays/ContextLastDays";
import { NoResults } from "../Games/NoResults";
import { Error } from "../Errors/Error";
export const Last30Days = () => {
  const {
    data,
    page,
    updateOrdering,
    isPending,
    error,
    paginationNext,
    paginationPrevious,
  } = useContext(ContextLastDays);

  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);

  return (
    <div className="pt-[60px] h-full w-full">
      {/* {console.log(data)} */}
      <div>
        <div className="px-8 pt-5">
          <div className="flex flex-col justify-between sm:flex-row items-cente">
            <h1 className="text-5xl font-semibold">Last 30 days</h1>
            <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5 py-2">
              <FiltersOrdering updateFilters={updateOrdering} />
            </div>
          </div>
          {isPending && <Loader />}
          {data?.results?.length <= 0 && <NoResults />}
          {error && <Error status={error.status} statusText={error.statusText} />}
          <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-10">
            {data?.results?.map((game) => (
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
      </div>
    </div>
  );
};
