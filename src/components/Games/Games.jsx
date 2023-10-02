import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { NoResults } from "./NoResults";
import { Footer } from "../Footer/Footer";
import { useGames } from "../../hooks/useGames";
import { LoaderFeching } from "../Loader/loaderFeching";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { useEffect } from "react";
import { ErrorFeching } from "../Errors/ErrorFeching";
import { Loadmore } from "../buttons/Loadmore";
import { FiltersDate } from "../Filters/FiltersDate";
export const Games = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    setOrdering,
    ordering,
    refetch,
    date,
    setDate,
  } = useGames();

  useEffect(() => {
    scrollTo(0, 0);
    refetch();
  }, [ordering, date]);

  const games = data?.pages?.flatMap((page) => page.games) ?? [];
  if (isLoading) return <Loader />;
  if (games.length <= 0) return <NoResults />;
  if (isError) return <ErrorFeching />;

  return (
    <>
      <div className="px-4 py-4">
        <div className="flex flex-col justify-between sm:flex-row">
          <h1 className="text-4xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
            All games
          </h1>
          <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5 ">
            <FiltersOrdering setOrdering={setOrdering} />
            <FiltersDate setDate={setDate} />
          </div>
        </div>
        <div
          className="flex flex-wrap justify-center gap-3 sm:justify-between "
          id="mas"
        >
          {games?.map((game) => (
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
    </>
  );
};
