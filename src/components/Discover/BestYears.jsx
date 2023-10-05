import { useEffect } from "react";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { NoResults } from "../Games/NoResults";
import { useBestYears } from "../../hooks/useBestYears";
import { ErrorFeching } from "../Errors/ErrorFeching";
import { Loadmore } from "../buttons/Loadmore";
import { LoaderFeching } from "../Loader/loaderFeching";
export const BestYears = () => {
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    ordering,
    setOrdering,
    refetch,
  } = useBestYears();
  useEffect(() => {
    scrollTo(0, 0);
    refetch();
  }, [ordering]);
  const games = data?.pages?.flatMap((page) => page.games) ?? [];
  return (
    <div className="pt-[60px] h-full w-full">
      <div>
        <div className="px-4 md:px-8">
          <div className="flex flex-col justify-between sm:flex-row">
            <h1 className="text-5xl md:text-5xl font-semibold py-3 capitalize">
              Best of the year
            </h1>
            <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-4 py-2">
              <FiltersOrdering setOrdering={setOrdering} />
            </div>
          </div>
          {isLoading && <Loader />}
          {games?.length <= 0 && isLoading === false && <NoResults />}
          {isError && <ErrorFeching />}
          <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-10">
            {games?.map((game) => (
              <Card
                img={game.background_image}
                name={game.name}
                id={game.id}
                key={game.id}
                genres={game.genres}
                rating={game.rating}
                date={game.released}
              />
            ))}
          </div>
          {hasNextPage && (
            <div className="flex w-full justify-center items-center">
              {isFetchingNextPage ? (
                <LoaderFeching />
              ) : (
                <Loadmore fetchNextPage={fetchNextPage} />
              )}
            </div>
          )}
          {hasNextPage === false && <span>no hay mas resultados </span>}
          <Footer />
        </div>
      </div>
    </div>
  );
};
