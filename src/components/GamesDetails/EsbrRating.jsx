import React, { useContext } from "react";
import { esbrRating } from "../../helpers/esbrRating";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";

export const EsbrRating = () => {
  const {data} = useContext(ContextDetails);
  return (
    <>
      {data.esrb_rating && (
        <div>
          <div>
            <h3 className="text-lg">Age rantings</h3>
            <span className="text-lg">
              {esbrRating(data.esrb_rating.slug)} {data.esrb_rating.name}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
