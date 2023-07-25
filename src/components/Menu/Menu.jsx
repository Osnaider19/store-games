import React from "react";
import { ItemMenu } from "./ItemMenu";
import { BsSearch } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { FaCompass } from 'react-icons/fa'
export const Menu = () => {
  return (
    <div className="fixed  left-0 top-0 h-screen w-[200px] z-50 bg-[#181515]">
      <div className="pt-32 px-1">
        <ul>
          <ItemMenu link={`#`} name={`Home`} icon={<ImHome />} />
          <ItemMenu link={`#`} name={`Descubrir`} icon={<FaCompass/>} />
          <ItemMenu link={`#`} name={`Buscar`} icon={<BsSearch />}/>
        </ul>
      </div>
    </div>
  );
};
