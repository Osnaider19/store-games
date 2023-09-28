
import { Link } from "react-router-dom";
import { useGamesDetails } from "../../hooks/useGamesDetails";

export const Platforms = () => {
  const { data } = useGamesDetails();
  const platfroms = data.details.platforms
  return (
    <div>
      <h3 className="text-lg opacity-70 font-semibold pt-3">Platforms</h3>
      <div className="flex py-1 flex-wrap w-full gap-4">
        {platfroms?.map((platform) => (
          <Link
            to={`/platforms/${platform.platform.id}/${platform.platform.name}`}
            key={platform.platform.id}
            className="hover:opacity-70 hover:underline"
          >
            <span>{platform.platform.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
