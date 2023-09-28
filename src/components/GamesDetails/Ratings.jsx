
import { RatingColor } from "../../helpers/RatingColor";
import { useGamesDetails } from "../../hooks/useGamesDetails";

export const Ratings = () => {
  const { data } = useGamesDetails();
  const rantings = data.details
  return (
    <div className="relative w-full">
      <div className="relative   py-2  rounded-xl flex items-center ">
        <p className="flex">{rantings?.ratings_count} Rantings</p>
      </div>
      <div className="flex gap-2 items-center flex-wrap pb-2 ">
        {rantings.ratings?.map((rating) => (
          <div
            className={`flex items-center gap-2 flex-nowrap py-1  px-2 rounded-lg capitalize   ${RatingColor(
              rating.title
            )}`}
            key={rating.id}
          >
            <p>{rating.title}:</p>
            <p>{rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
