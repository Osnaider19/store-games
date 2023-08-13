import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";

export const Website = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div className="pt-3">
      <p className="text-lg opacity-70 font-semibold">Website</p>
      <a
        href={data.website}
        target="_blank"
        className="hover:opacity-70 hover:underline"
      >
        {data.website}
      </a>
    </div>
  );
};
