import React from "react";
import { Link } from "react-router-dom";
import { NavLink as NavLinkRR } from "react-router-dom";
import { handelvisiblemenu } from "../../helpers/menuVisible";
export const ItemMenu = ({ link, name, icon }) => {
  const NavLink = ({ to, children, onClick, ...props }) => {
    return (
      <NavLinkRR
        {...props}
        className={({ isActive }) => (isActive ? "font-semibold" : undefined)}
        to={to}
        onClick={onClick}
      >
        {children}
      </NavLinkRR>
    );
  }
  return (
    <NavLink to={link}>
      <li className="flex items-center py-3 hover:bg-[#332e2e] rounded-md " onClick={handelvisiblemenu}>
        <div className="px-3  py-1 text-xl">{icon}</div>
        <div>
          <span className="text-lg">{name}</span>
        </div>
      </li>
    </NavLink>
  );
};
