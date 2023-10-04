import { useEffect } from "react";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { useParams } from "react-router-dom";
import { usePlatforms } from "../../hooks/usePlatforms";
import { LoaderFeching } from "../Loader/loaderFeching";
import { Loadmore } from "../buttons/Loadmore";
import { useQueryClient } from "@tanstack/react-query";
import { ErrorFeching } from "../Errors/ErrorFeching";
export const Platfroms = () => {
  const { name } = useParams();
  const queryClient = useQueryClient();
  const {
    data,
    isError,
    isFetchingNextPage,
    isLoading,
    date,
    error,
    fetchNextPage,
    hasNextPage,
    ordering,
    setDate,
    setOrdering,
  } = usePlatforms();
  const reloadFirstPage = () => {
    fetchNextPage({ pageParam: 1 });
  };
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["Platforms"], exact: true });
    reloadFirstPage();
  }, [ordering, date, name]);

  const games = data?.pages?.flatMap((page) => page?.games) ?? [];
  console.log(data)
  return (
    <>
      <div className="px-5 pt-[60px]">
        <div className="flex flex-col justify-between sm:flex-row">
          <h1 className="py-3 text-5xl font-bold ">Games of {name}</h1>
          <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5">
            <FiltersOrdering setOrdering={setOrdering} />
            <FiltersDate setDate={setDate} />
          </div>
        </div>
        {isLoading && <Loader />}
        {games?.length <= 1 && isLoading === false && <ErrorFeching />}
        <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-10 transition-all duration-300">
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
    </>
  );
};
