import React from "react";
import './style-search.css'
export const Search = () => {
  return (
    <div className="header">
      <div className="container-search">
        <input
          type="text"
          placeholder="search"
          className="input-search"
        />
      </div>
    </div>
  );
};
