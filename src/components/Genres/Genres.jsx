import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { NoResults } from "../Games/NoResults";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { useGenres } from "../../hooks/useGenres";
import { useParams } from "react-router-dom";
import { ErrorFeching } from "../Errors/ErrorFeching";
import { LoaderFeching } from "../Loader/loaderFeching";
import { Loadmore } from "../buttons/Loadmore";
import { useQueryClient } from "@tanstack/react-query";
export const Genres = () => {
  const { name } = useParams();
  const queryClient = useQueryClient();
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    setDate,
    setOrdering,
    date,
    ordering,
  } = useGenres();
  const reloadFirstPage = () => {
    fetchNextPage({ pageParam: 1 });
  };
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["Genres"], exact: true });
    reloadFirstPage();
  }, [date, ordering, name]);
  useEffect(() => {
    scrollTo(0, 0);
  }, [name]);
  
  const games = data?.pages?.flatMap((page) => page.games) ?? [];

  return (
    <>
      <div className="px-5 pt-[60px]">
        <div className="flex flex-col justify-between sm:flex-row">
          <h1 className="text-4xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
            Games {name.replace(/-/g, " ")}
          </h1>
          <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5">
            <FiltersOrdering setOrdering={setOrdering} />
            <FiltersDate setDate={setDate} />
          </div>
        </div>
        {isLoading && <Loader />}
        {isError && <ErrorFeching />}
        {games.length <= 0 && isLoading === false && <NoResults />}
        <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-10">
          {games?.map((game) => (
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
        {hasNextPage === false && <span>no hay mas resultados </span>}
        <Footer />
      </div>
    </>
  );
};
