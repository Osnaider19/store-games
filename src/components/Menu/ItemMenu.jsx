import React from "react";
export const ItemMenu = ({ link, name , icon }) => {
  return (
    <a href={link}>
      <li className="flex items-center py-3 hover:bg-[#332e2e] rounded-md">
        <i className="px-2">
            {icon}
        </i>
        <div>
          <span className="text-xl">{name}</span>
        </div>
      </li>
    </a>
  );
};
