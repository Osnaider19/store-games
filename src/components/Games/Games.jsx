import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { NoResults } from "./NoResults";
import { Footer } from "../Footer/Footer";
import { useGames } from "../../hooks/useGames";
import { LoaderFeching } from "../Loader/loaderFeching";

export const Games = () => {
  const {
    games,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useGames();

  return (
    <>
      {isLoading && <Loader />}
      {games?.length <= 0 && <NoResults />}
      {isError && (
        <p className="text-center text-2xl font-semibold">
          Error en obtener los datos
        </p>
      )}
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
        {hasNextPage && (
          <div className="flex w-full justify-center items-center">
            {isFetchingNextPage ? (
              <LoaderFeching />
            ) : (
              <button
                className={` py-2 px-6 bg-red-500 rounded-md overflow-hidden`}
                onClick={() => fetchNextPage()}
              >
                Cargar más
              </button>
            )}
          </div>
        )}

        {hasNextPage === false && <span>no hay mas resultados </span>}
        <Footer />
      </div>
    </>
  );
};
