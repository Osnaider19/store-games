import React from "react";
import { convertirFecha } from "../../helpers/convertirFecha";
import { formatDate } from "../../helpers/FormatDate";

export const FechaUpdateLaunch = ({updated , released}) => {
  return (
    <>
      <div className="relative w-full">
        <div className="pt-3 ">
          <p className="font-semibold">Fecha de Lanzamiento</p>
          <p> {convertirFecha(released)}</p>
        </div>
      </div>
      <div className="py-3">
        <p className="font-semibold">Ultima Actualización</p>
        <span>{formatDate(updated)}</span>
      </div>
    </>
  );
};
