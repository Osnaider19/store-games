import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { Search } from "./Search";

function Header() {
  return (
    <div className="absolute left-0 top-0 w-full py-3 px-9 flex  items-center z-50">
      <Logo />
      <Nav />
      <Search />
    </div>
  );
}

export default Header;
