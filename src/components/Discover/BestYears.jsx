import React from "react";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { Pagination } from "../Pagination/Pagination";
import { useState , useEffect} from "react";
import { Footer } from "../Footer/Footer";
export const BestYears = () => {
  const [page, setPage] = useState(1);
  const { data, isPending, setIsPending, error } = useFetch(
    `${URL}/games?key=${API_KEY}&dates=2023-01-01,2023-12-31&ordering=-added&page=${page}`
  );
  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);
  return (
    <div className="pt-[60px] h-full w-full">
      {console.log(data)}
      <div>
        <div className="px-4 md:px-8">
          <h1 className="text-5xl font-semibold pt-7 capitalize">
            Best of the year
          </h1>
          {isPending && <Loader />}
          <div className="flex flex-wrap w-full gap-3 justify-center md:justify-between py-10">
            {data?.results.map((game) => (
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
            page={page}
            setIsPending={setIsPending}
            setPage={setPage}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};
