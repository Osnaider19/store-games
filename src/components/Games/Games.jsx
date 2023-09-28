import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { NoResults } from "./NoResults";
import { Footer } from "../Footer/Footer";
import { API_KEY, URL } from "../../config/config";
import { useInfiniteQuery } from "@tanstack/react-query";

async function getGames({ pageParam = 1 }) {
  try {
    const res = await fetch(`${URL}/games?key=${API_KEY}&page=${pageParam}`);
    if (!res.ok) {
      throw {
        err: true,
        status: res.status,
        statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
      };
    }
    const data = await res.json();
    const games = data.results;
    const nextCursor = data.next
      ? parseInt(data.next.match(/page=(\d+)/)[1])
      : null;
    return {
      games,
      nextCursor,
    };
  } catch (error) {
    throw {
      err: true,
      status: res.status,
      statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
    };
  }
}

export const Games = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage , isFetchingNextPage } =
    useInfiniteQuery(["games"], getGames, {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus :false, 
      refetchInterval : false , 
      refetchOnMount : false , 
    });
  console.log(data);

  const games = data?.pages?.flatMap((page) => page.games) ?? [];
  return (
    <>
      {isLoading && <Loader />}
      {games?.length <= 0 && <NoResults />}
      {error && <Error status={error.status} statusText={error.statusText} />}
      <div className="px-4 py-4">
        <div className="flex flex-col justify-between sm:flex-row">
          <h1 className="text-4xl w-full font-semibold py-4 sm:w-auto  md:text-6xl">
            All games
          </h1>
          <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5 ">
            {/* <FiltersOrdering updateFilters={updateOrdering} />
            <FiltersDate updateDate={updateDate} /> */}
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
        {isFetchingNextPage && <div>loader</div>}
        {hasNextPage && (
          <button
            className="py-3 px-6 bg-red-500"
            onClick={() => fetchNextPage()}
          >
            Cargar más
          </button>
        )}

        {hasNextPage === false && <span>no hay mas resultados </span>}
        <Footer />
      </div>
    </>
  );
};
