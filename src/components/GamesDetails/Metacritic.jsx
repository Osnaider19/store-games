import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
import { ScoreColor } from "../../helpers/ScoreColor";
export const Metacritic = () => {
  const { data } = useContext(ContextDetails);
  return (
    <>
      {data.metacritic && (
        <div>
          <p className="text-lg">Metascore</p>
          <div className="py-1 flex flex-col justify-center items-start">
            <span
              className={`text-xl py-1 px-1 border-2 rounded-lg
            text-${ScoreColor(data.metacritic)}
            border-${ScoreColor(data.metacritic)}
            `}
            >
              {data.metacritic}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
