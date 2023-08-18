import React from "react";

export const ItemLink = ({link , text }) => {
  return (
    <li className="py-1 list-none">
      <a href={link} className="text-lg hover:underline hover:text-blue-400">{text}</a>
    </li>
  );
};
