import { useGamesDetails } from "../../hooks/useGamesDetails";


export const Publisher = () => {
  const { data } = useGamesDetails();
  const publishers = data.details.publishers
  return (
    <div>
      <h3 className="text-lg">Publisher</h3>
      {publishers?.map((publishe) => (
        <div key={publishe.id}>
          <span>{publishe.name}</span>
        </div>
      ))}
    </div>
  );
};
