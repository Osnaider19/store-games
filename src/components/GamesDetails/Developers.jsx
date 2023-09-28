import { Link } from "react-router-dom";
import { useGamesDetails } from "../../hooks/useGamesDetails";

export const Developers = () => {
  const { data } = useGamesDetails();
  const developers = data?.details.developers
  return (
    <div>
      <p className="text-lg">Developers</p>
      {developers?.map((developer) => (
        <div key={developer.id}>
          <Link to={`/developers/${developer.slug}`} className="hover:underline">
            <span>{developer.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
