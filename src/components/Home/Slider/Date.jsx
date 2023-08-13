import React from "react";
import { convertirFecha } from "../../../helpers/convertirFecha";

export const Date = ({ released }) => {
  return (
    <>
      <div className="relative w-full">
        <div className="pt-3 ">
          <p className="text-lg md:text-xl py-2"> {convertirFecha(released)}</p>
        </div>
      </div>
    </>
  );
};
