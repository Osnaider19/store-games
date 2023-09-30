import { useParams } from "react-router-dom";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { NoResults } from "../Games/NoResults";
import { Footer } from "../Footer/Footer";
import { useDevelopers } from "../../hooks/useDevelopers";
import { useEffect } from "react";
import { Loadmore } from "../buttons/Loadmore";
import { LoaderFeching } from "../Loader/LoaderFeching";
export const Developers = () => {
  const { name } = useParams();
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetchingNextPage,
  } = useDevelopers();

  useEffect(() => {
    refetch();
    scrollTo(0, 0);
  }, [name]);
  const games = data?.pages?.flatMap((page) => page.games) ?? [];
  return (
    <>
      <div className="pt-[60px] px-8 py-5">
        <div>
          <h1 className="text-2xl md:text-5xl font-semibold capitalize pt-7">
            Developed by {name.replace(/-/g, " ")}
          </h1>
        </div>
        {isLoading && <Loader />}
        {games?.length <= 0 && <NoResults />}
        {isError && <p>error </p>}
        <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-5">
          {games?.map((game) => (
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
        <div className="flex justify-center items-center w-full">
          {hasNextPage && isFetchingNextPage === false && (
          <Loadmore fetchNextPage={fetchNextPage} />)}
          {hasNextPage === false && <p>no hay mas resultados</p>}
          {isFetchingNextPage && <LoaderFeching />}
        </div>
        <Footer />
      </div>
    </>
  );
};
