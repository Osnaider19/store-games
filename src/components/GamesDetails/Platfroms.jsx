import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";

export const Platfroms = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div className="relative flex justify-start items-center px-5 w-full">
      {console.log(data)}
      <div>
        {data.platforms?.map((plat) => (
          <div key={plat.platform.id}>
            {console.log(plat.platform)}
            {plat.requirements && (
              <>
                <div className="text-xl pb-2 font-semibold">System requirements for {plat.platform.name}</div>
                <div>
                  {plat.requirements.minimum && (
                    <p>Minimum: {plat.requirements.minimum}</p>
                  )}
                  {plat.requirements.recommended && (
                    <p>Recommended: {plat.requirements.recommended}</p>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
