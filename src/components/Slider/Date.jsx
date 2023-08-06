import React from "react";
import { convertirFecha } from "../../helpers/convertirFecha";

export const FechaUpdateLaunch = ({ released }) => {
  return (
    <>
      <div className="relative w-full">
        <div className="pt-3 ">
          <p className="text-xl py-2"> {convertirFecha(released)}</p>
        </div>
      </div>
    </>
  );
};
