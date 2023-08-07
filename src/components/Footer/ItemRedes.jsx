import React from "react";

export const ItemRedes = ({link , icon}) => {
  return (
    <a href={link}>
      <i className="flex hover:scale-125 transition-transform duration-200">
        {icon}
      </i>
    </a>
  );
};
