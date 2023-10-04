import { Card } from "../../Card/Card";
import { LoaderCard } from "../../Loader/LoaderCard";
import { Slider } from "../Slider/Slider";
import { useGetHome } from "../../../hooks/useGetHome";

export const Games = () => {
  const { data, isError, isLoading } = useGetHome();
  const games = data?.games.results;
  return (
    <>
      <Slider />
      <div
        className="relative  w-full m-auto z-30 "
        style={{
          background:
            "linear-gradient( transparent ,  rgb(18, 18, 18) ,  rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) , rgb(18, 18, 18) ,  rgb(18, 18, 18) ,  rgb(18, 18, 18),  rgb(18, 18, 18),  rgb(18, 18, 18) ,  rgb(18, 18, 18))",
        }}
      >
        <div className="relative px-4 w-full flex flex-wrap gap-1 md:gap-5 justify-between py-5 md:px-8 -mt-[300px] md:-mt-[200px]">
          {isLoading && <LoaderCard />}
          {isError && <p>error</p>}
          {games?.map((game) => (
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
        </div>
      </div>
    </>
  );
};
