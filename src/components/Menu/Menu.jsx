import React from "react";
import { ItemMenu } from "./ItemMenu";
import { BsSearch } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { FaGamepad } from "react-icons/fa";
import { Plataforms } from "./Plataforms";
import Top from "./Top";
import { Genres } from "./Genres";
import "./index.css";
import { Logo } from "./Logo";
export const Menu = () => {
  return (
    <div className="fixed  left-0 top-0 h-screen w-[220px] z-50  menu__container">
      <nav className="px-1">
        <Logo />
        <ul>
          <ItemMenu link={`/`} name={`Home`} icon={<ImHome />} />
          <ItemMenu link={`#`} name={`All Games`} icon={<FaGamepad />} />
          <ItemMenu link={`search`} name={`Search`} icon={<BsSearch />} />
          <Plataforms />
          <Top />
          <Genres />
        </ul>
      </nav>
    </div>
  );
};
