import { convertirFecha } from "../../helpers/convertirFecha";
import { useGamesDetails } from "../../hooks/useGamesDetails";
export const Title = () => {
  const { data } = useGamesDetails();
  const details = data.details
  return (
    <div className="pt-7 md:pt-10">
      <h1 className="text-3xl py-3 font-bold md:text-5xl">{details.name}</h1>
      <div className="rounded-lg w-auto inline-block ">
        <p className="md:py-2">{convertirFecha(details.released)}</p>
      </div>
    </div>
  );
};
