import React from "react";
import { Redes } from "./Redes";
import { ItemLink } from "./ItemLink";

export const Footer = () => {
  return (
    <div className="relative bg-[#121212]">
      <div className="py-8 px-8">
        <Redes />
        <ul className="flex justify-between flex-wrap py-4">
          <div>
            <ItemLink link={`#`} text="Estudios de expeciencias de usuarios" />
            <ItemLink link={`#`} text="Compañia" />
            <ItemLink link={`#`} text="Servicios en línea" />
          </div>
          <div>
            <ItemLink link={`#`} text="Reglas de la comunidad" />
            <ItemLink link={`#`} text="Empleo" />
            <ItemLink link={`#`} text="Politicas de contenido de fans" />
          </div>
          <div>
            <ItemLink link={`#`} text="Soporte técnico" />
            <ItemLink link={`#`} text="Estandares de la comunidad" />
            <ItemLink link={`#`} text="Marca registrada" />
          </div>
        </ul>
        
      </div>
    </div>
  );
};
