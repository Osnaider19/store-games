import React from "react";
import { ItemMenu } from "./ItemMenu";
import { Platforms } from "./Platforms";
import Top from "./Top";
import { Genres } from "./Genres";
import "./index.css";
import { Logo } from "./Logo";
import { Search } from "../Search/Search";
import { HomeIcon } from "./IconHome";
import { Mando } from "./Mando";



export const Menu = () => {
  return (
    <>
      <div className="relative">
        <div className="menu__container">
          <Logo />
          <nav className="px-1 ">
            <ul className="pb-10">
              <ItemMenu link={`/`} name={`Home`} icon={<HomeIcon />} />
              <ItemMenu
                link={`/games`}
                name={`All Games`}
                icon={<Mando />}
              />
              <Platforms />
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


