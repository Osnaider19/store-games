import { useParams } from "react-router-dom";
import { API_KEY, URL } from "../../config/config";
import { useFetch } from "../../hooks/useFech";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { useState, useEffect } from "react";
import { Pagination } from "../Pagination/Pagination";
import { NoResults } from "../Games/NoResults";
import { Error } from "../Errors/Error";
export const Developers = () => {
  const { name } = useParams();
  const [page, setPage] = useState(1);
  const { data, isPending, setIsPending, error } = useFetch(
    `${URL}/games?key=${API_KEY}&developers=${name}&page=${page}`
  );
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  function paginationNext() {
    setPage(page + 1);
    setIsPending(true);
  }
  function paginationPrevious() {
    setPage(page - 1);
    setIsPending(true);
  }
  return (
    <>
      {console.log(data)}

      {data && (
        <div className="pt-[60px] px-8 py-5">
          <div>
            <h1 className="text-2xl md:text-5xl font-semibold capitalize pt-7">
              Developed by {name.replace(/-/g, " ")}
            </h1>
          </div>
          {isPending && <Loader />}
          {data?.results?.length <= 0 && <NoResults />}
          {error && (
            <Error status={error.status} statusText={error.statusText} />
          )}
          <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-5">
            {data?.results?.map((game) => (
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
          <Pagination
            next={data?.next}
            previous={data?.previous}
            paginationNext={paginationNext}
            paginationPrevious={paginationPrevious}
          />
        </div>
      )}
    </>
  );
};
