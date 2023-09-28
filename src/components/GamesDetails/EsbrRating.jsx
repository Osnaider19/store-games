
import { esbrRating } from "../../helpers/esbrRating";
import { useGamesDetails } from "../../hooks/useGamesDetails";

export const EsbrRating = () => {
  const { data :  {details} } = useGamesDetails();
  return (
    <>
      {details?.esrb_rating && (
        <div>
          <div>
            <h3 className="text-lg">Age rantings</h3>
            <span className="text-lg">
              {esbrRating(details?.esrb_rating.slug)} {details?.esrb_rating.name}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
