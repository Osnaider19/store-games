import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";

export const Developers = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div>
      <p className="text-lg">Developers</p>
      {data.developers?.map((developer) => (
        <div key={developer.id}>
          <p>{developer.name}</p>
        </div>
      ))}
    </div>
  );
};
