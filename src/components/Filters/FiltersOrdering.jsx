import React from "react";
import { ordering } from "./filters";
export const FiltersOrdering = ({updateFilters}) => {
  
  return (
    <select
      name="filters__ordering"
      onChange={(e) => updateFilters(e.target.value)}
      id="filters__ordering"
      className="bg-[#121212] border border-[#ffffff50] text-white text-lg rounded-lg block w-full py-1 cursor-pointer md:w-[200px]"
    >
      <option value="" id="filters__ordering" name="filters__ordering">
        Order by popularity
      </option>
      {ordering?.map((order, index) => (
        <option
          key={index}
          value={order.value}
          id="filters__ordering"
          name="filters__ordering"
        >
          {order.name}
        </option>
      ))}
    </select>
  );
};
