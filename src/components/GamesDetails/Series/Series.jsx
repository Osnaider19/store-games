import { useGamesDetails } from "../../../hooks/useGamesDetails";
import { Card } from "../../Card/Card";
export const Series = () => {
  const { data } = useGamesDetails();
  const series = data.series.results;
  return (
    <>
      {series?.length !== 0 && (
        <div className="relative w-full h-full">
          <div>
            <h4 className="text-xl md:text-3xl py-4 font-semibold ">
              Games of the same series
            </h4>
            <section className="flex justify-center items-center w-full">
              <ul className="flex flex-wrap justify-center w-full gap-5 md:gap-3 sm:justify-between sm:gap-1">
                {series?.map((game) => (
                  <Card
                    img={game.background_image}
                    name={game.name}
                    id={game.id}
                    genres={game.genres}
                    rating={game.rating}
                    date={game.released}
                    key={game.id}
                  />
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
