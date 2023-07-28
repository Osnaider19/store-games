import React from "react";
import { ItemMenu } from "./ItemMenu";
import { BsSearch } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { FaGamepad } from 'react-icons/fa'
import { Plataforms } from "./Plataforms";
import Top from "./Top";
import { Genres } from "./Genres";
import './index.css'
export const Menu = () => {
  return (
    <div className="fixed  left-0 top-0 h-screen w-[220px] z-50 bg-[#181515] menu__container">
      <div className="pt-32 px-1">
        <ul>
          <div>
            <ItemMenu link={`/`} name={`Home`} icon={<ImHome />} />
            <ItemMenu link={`#`} name={`Todos`} icon={<FaGamepad />} />
            <ItemMenu link={`search`} name={`Buscar`} icon={<BsSearch />} />
          </div>
          <Plataforms />
          <Top />
          <Genres/>
        </ul>
      </div>
    </div>
  );
};
