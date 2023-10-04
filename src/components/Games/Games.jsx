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
import { useQueryClient } from "@tanstack/react-query";
export const Games = () => {
  const queryClient = useQueryClient();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    setOrdering,
    ordering,
    date,
    setDate,
  } = useGames();
  const reloadFirstPage = () => {
    fetchNextPage({ pageParam: 1 });
  };
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["games"], exact: true });
    reloadFirstPage();
  }, [ordering, date]);
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const games = data?.pages?.flatMap((page) => page.games) ?? [];

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
        {isLoading && <Loader />}
        {isError && <ErrorFeching />}
        {games.length <= 0 && isLoading === false && <NoResults />}
        <div
          className="flex flex-wrap justify-center gap-3 sm:justify-between "
          id="mas"
        >
          {games?.map((game) => (
            <Card
              img={game.background_image}
              date={game.released}
              genres={game.genres}
              id={game.id}
              name={game.name}
              rating={game.rating}
              key={game.id}
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
    </>
  );
};
