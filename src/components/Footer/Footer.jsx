import React from "react";
import { Redes } from "./Redes";
import { ItemLink } from "./ItemLink";

export const Footer = () => {
  return (
    <div className="relative">
      <div className="py-8">
        <Redes />
        <ul className="flex justify-between flex-wrap py-4">
          <div>
            <ItemLink link={`#`} text="User experience studies" />
            <ItemLink link={`#`} text="Company" />
            <ItemLink link={`#`} text="Online services" />
          </div>
          <div>
            <ItemLink link={`#`} text="community rules" />
            <ItemLink link={`#`} text="Employment" />
            <ItemLink link={`#`} text="Fan Content Policies" />
          </div>
          <div>
            <ItemLink link={`#`} text="Technical support" />
            <ItemLink link={`#`} text="community standards" />
            <ItemLink link={`#`} text="registered trademark" />
          </div>
        </ul>
        
      </div>
    </div>
  );
};
