import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";

export const Publisher = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div>
      <h3 className="font-semibold text-lg">Publisher</h3>
      {data.publishers?.map((publishe) => (
        <div key={publishe.id}>
          <span>{publishe.name}</span>
        </div>
      ))}
    </div>
  );
};
