import { useGamesDetails } from "../../hooks/useGamesDetails";



export const Website = () => {
  const { data } = useGamesDetails();
  const website = data.details.website;
  return (
    <div className="pt-3">
      <p className="text-lg opacity-70 font-semibold">Website</p>
      <a
        href={website}
        target="_blank"
        className="hover:opacity-70 hover:underline"
      >
        {website}
      </a>
    </div>
  );
};
