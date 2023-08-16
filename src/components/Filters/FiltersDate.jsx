import React from "react";
import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";
export const FiltersDate = ({ updateDate }) => {
  const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
  return (
    <select
      name="filters__date"
      onChange={(e) => updateDate(e.target.value)}
      id="countries"
      className="bg-[#121212] border border-[#ffffff50] text-white text-lg rounded-lg block w-full py-1 cursor-pointer md:w-[200px]"
    >
      <option>Release date</option>
      {data?.filters?.years?.map((year) => (
        <option
          key={year.count}
          name="filters__date"
          value={year.filter}
          className="py-2 hover:bg-slate-900"
        >
          {year.decade} - {year.to}
        </option>
      ))}
    </select>
  );
};
