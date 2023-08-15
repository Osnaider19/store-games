import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFech";
import { URL } from "../../config/config";
import { API_KEY } from "../../config/config";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { useState, useEffect } from "react";
import { Pagination } from "../Pagination/Pagination";
import { Footer } from "../Footer/Footer";
import { Filters } from "../Filters/Filter";
import { NoResults } from "../Games/NoResults";
export const Genres = () => {
  const { name } = useParams();
  const [page, setPage] = useState(1);
  const [date, setDate] = useState("");
  const [ordering, setOrdering] = useState("");
  const { data, error, isPending, setIsPending } = useFetch(
    `${URL}/games?key=${API_KEY}&genres=${name}&page=${page}&dates=${date}&ordering=${ordering}`
  );

  useEffect(() => {
    scrollTo(0, 0);
    setIsPending(true);
  }, [name, page]);
  return (
    <>
      {console.log(data)}
      <div className="px-5 pt-[60px]">
        <div className="flex flex-col justify-between sm:flex-row">
          <h1 className="py-3 text-5xl font-bold capitalize">
            Games {name.replace(/-/g, " ")}
          </h1>
          <Filters
            setDate={setDate}
            setIsPending={setIsPending}
            setOrdering={setOrdering}
            setPage={setPage}
          />
        </div>
        {isPending && <Loader />}
        {data?.results?.length <= 0 && <NoResults/>}
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
    </>
  );
};
