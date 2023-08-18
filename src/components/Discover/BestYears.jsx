import { useContext , useEffect} from "react";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { Pagination } from "../Pagination/Pagination";
import { Footer } from "../Footer/Footer";
import { ContextBestYear } from "../../Context/contextBestyear/ContextBestYear";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
export const BestYears = () => {
  const {
    data,
    isPending,
    error,
    page,
    updateOrdering,
    paginationNext,
    paginationPrevious,
  } = useContext(ContextBestYear);
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  return (
    <div className="pt-[60px] h-full w-full">
      {console.log(data)}
      <div>
        <div className="px-4 md:px-8">
          <div className="flex flex-col justify-between sm:flex-row">
            <h1 className="text-3xl md:text-5xl font-semibold pt-7 capitalize">
              Best of the year
            </h1>
            <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5 py-2">
              <FiltersOrdering updateFilters={updateOrdering} />
            </div>
          </div>

          {isPending && <Loader />}
          <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-10">
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
      </div>
    </div>
  );
};
