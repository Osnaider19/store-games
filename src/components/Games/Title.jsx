import React, { useContext } from "react";
import { convertirFecha } from "../../helpers/convertirFecha";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
export const Title = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div>
      <h1 className="text-5xl py-3 font-bold">{data.name}</h1>
      <div className="rounded-lg w-auto inline-block ">
        <p className="py-2 font-bold">{convertirFecha(data.released)}</p>
      </div>
    </div>
  );
};
