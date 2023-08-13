import React, { useContext } from "react";
import { convertirFecha } from "../../helpers/convertirFecha";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
export const Title = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div className="pt-7 md:pt-10">
      <h1 className="text-3xl py-3 font-bold md:text-5xl">{data.name}</h1>
      <div className="rounded-lg w-auto inline-block ">
        <p className="md:py-2">{convertirFecha(data.released)}</p>
      </div>
    </div>
  );
};
