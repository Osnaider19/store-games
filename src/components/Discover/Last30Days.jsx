import { useEffect } from "react";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { useBestLast } from "../../hooks/useBestLast";
import { ErrorFeching } from "../Errors/ErrorFeching";
import { LoaderFeching } from "../Loader/loaderFeching";
import { Loadmore } from "../buttons/Loadmore";
import { useQueryClient } from "@tanstack/react-query";
export const Last30Days = () => {
  const queryClient = useQueryClient();
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    ordering,
    setOrdering,
    
  } = useBestLast();
  const reloadFirstPage = () => {
    fetchNextPage({ pageParam: 1 });
  };
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["bestLast"], exact: true });
    reloadFirstPage();
  }, [ordering]);
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const games = data?.pages?.flatMap((page) => page?.games) ?? [];
  return (
    <div className="pt-[60px] h-full w-full">
      <div>
        <div className="px-8 pt-5">
          <div className="flex flex-col justify-between sm:flex-row items-cente">
            <h1 className="text-5xl font-semibold">Last 30 days</h1>
            <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5 py-2">
              <FiltersOrdering setOrdering={setOrdering} />
            </div>
          </div>
          {isLoading && <Loader />}
          {games?.length <= 1 && isLoading === false && <ErrorFeching />}
          <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-10">
            {games[0] &&
              games?.map((game) => (
                <Card
                  key={game.id}
                  img={game.background_image}
                  name={game.name}
                  id={game.id}
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
          {hasNextPage === false && games.length > 1 && (
            <span>no hay mas resultados </span>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
};
