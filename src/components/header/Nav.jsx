import React from "react";
import NavItem from "./NavItem";

function Nav() {
  
  return (
    <>
      <nav >
        <ul className=" flex  items-center justify-center w-full flex-grow ">
          <NavItem link={`#`} name={`Home`} />
          <NavItem link={`#`} name={`Descubrir`} />
          <NavItem link={`#`} name={`Noticias`} />
        </ul>
      </nav>
    </>
  );
}

export default Nav;
