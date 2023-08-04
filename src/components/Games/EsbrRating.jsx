import React from "react";
import { esbrRating } from "../../helpers/esbrRating";

export const EsbrRating = ({ EsbrRating }) => {
  return (
    <>
      {EsbrRating && (
        <div>
          <div>
            <h3 className="text-lg font-semibold">Age rantings</h3>
            <span className="text-lg">
              {esbrRating(EsbrRating.slug)} {EsbrRating.name}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
