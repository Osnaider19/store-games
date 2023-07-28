import React from "react";
import { Link } from "react-router-dom";
export const ItemMenu = ({ link, name, icon }) => {
  return (
    <Link to={link}>
      <li className="flex items-center py-3 hover:bg-[#332e2e] rounded-md">
        <i className="px-2">{icon}</i>
        <div>
          <span className="text-lg">{name}</span>
        </div>
      </li>
    </Link>
  );
};
