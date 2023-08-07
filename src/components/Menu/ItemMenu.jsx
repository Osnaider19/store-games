import React from "react";
import { Link } from "react-router-dom";
import { NavLink as NavLinkRR } from "react-router-dom";
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
      <li className="flex items-center py-3 hover:bg-[#332e2e] rounded-md">
        <i className="px-2">{icon}</i>
        <div>
          <span className="text-lg">{name}</span>
        </div>
      </li>
    </NavLink>
  );
};
