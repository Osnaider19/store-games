import { useContext, useEffect  , useState} from "react";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { Pagination } from "../Pagination/Pagination";
import { Footer } from "../Footer/Footer";
import { ContextPlatforms } from "../../Context/ContextPlatforms/ContextPlatforms";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { NoResults } from "../Games/NoResults";
import { Error } from "../Errors/Error";
import { FiltersPlatforms } from "../Filters/FiltersPlatforms";
export const Platfroms = () => {
  const {
    data,
    isPending,
    error,
    updateOrdering,
    updateDate,
    paginationPrevious,
    paginationNext,
    page,
    updatePlatfroms,
  } = useContext(ContextPlatforms);
  const [title, setTitle] = useState("");
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  return (
    <>
      {console.log(data)}
      <div className="px-5 pt-[60px]">
        <div className="flex flex-col justify-between sm:flex-row">
          <h1 className="py-3 text-5xl font-bold capitalize">
            Games of {title}
          </h1>
          <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5">
            <FiltersOrdering updateFilters={updateOrdering} />
            <FiltersDate updateDate={updateDate} />
          </div>
        </div>
        {isPending && <Loader />}
        {data?.results?.length <= 0 && <NoResults />}
        {error && <Error status={error.status} statusText={error.statusText} />}
        <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-10 transition-all duration-300">
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
    </>
  );
};
