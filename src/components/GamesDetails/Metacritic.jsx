
import { ScoreColor } from "../../helpers/ScoreColor";
import { useGamesDetails } from "../../hooks/useGamesDetails";
export const Metacritic = () => {
  const { data } = useGamesDetails();
  const metacritic = data.details.metacritic
  return (
    <>
      {metacritic && (
        <div>
          <p className="text-lg">Metascore</p>
          <div className="py-1 flex flex-col justify-center items-start">
            <span
              className={`text-xl py-1 px-1 border-2 rounded-lg font-semibold`}
              style={{
                color: `${ScoreColor(metacritic)}`,
                border: `2px solid ${ScoreColor(metacritic)}`,
              }}
            >
              {metacritic}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
