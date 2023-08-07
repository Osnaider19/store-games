import React from "react";
import { ItemMenu } from "./ItemMenu";
import { ImHome } from "react-icons/im";
import { FaGamepad } from "react-icons/fa";
import { Plataforms } from "./Plataforms";
import Top from "./Top";
import { Genres } from "./Genres";
import "./index.css";
import { Logo } from "./Logo";
import { Search } from "./Search";
export const Menu = () => {
  return (
    <>
      <div className="relative">
      <div className="menu__container">
        <Logo />
        <nav className="px-1 ">
          <ul className="pb-10">
            <ItemMenu link={`/`} name={`Home`} icon={<ImHome />} />
            <ItemMenu link={`/games`} name={`All Games`} icon={<FaGamepad />} />
            <Plataforms />
            <Top />
            <Genres />
          </ul>
        </nav>
      </div>
      <Search />
      </div>
    </>
  );
};
