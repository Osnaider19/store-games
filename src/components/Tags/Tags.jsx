import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { FiltersOrdering } from "../Filters/FiltersOrdering";
import { FiltersDate } from "../Filters/FiltersDate";
import { Footer } from "../Footer/Footer";
import { useTags } from "../../hooks/useTags";
import { Loadmore } from "../buttons/Loadmore";
import { LoaderFeching } from "../Loader/loaderFeching";
import { useQueryClient } from "@tanstack/react-query";
export const Tags = () => {
  const { name } = useParams();
  const queryClient = useQueryClient();
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    date,
    ordering,
    setDate,
    setOrdering,
    fetchNextPage,
    hasNextPage,
  } = useTags();
  const reloadFirstPage = () => {
    fetchNextPage({ pageParam: 1 });
  };
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["Tags"], exact: true });
    reloadFirstPage();
  }, [ordering, date, name]);

  const games = data?.pages?.flatMap((page) => page?.games) ?? [];
  return (
    <div className="pt-[60px] px-4 md:px-8">
      <div className="flex flex-col justify-between sm:flex-row">
        <h1 className="text-2xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
          Games {name.replace(/-/g, " ")}
        </h1>
        <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5">
          <FiltersOrdering setOrdering={setOrdering} />
          <FiltersDate setDate={setDate} />
        </div>
      </div>
      {isLoading && <Loader />}
      {games?.length <= 1 && isLoading === false && <ErrorFeching />}
      <div className="flex flex-wrap justify-center gap-3 py-10 sm:justify-between">
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
  );
};
