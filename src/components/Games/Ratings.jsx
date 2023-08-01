import React from "react";
import { convertirFecha } from "../../helpers/convertirFecha";

export const Ratings = ({ ratings, ratings_count, released }) => {
  return (
    <div className="relative w-full">
      <div className="bg-black/50 rounded-lg w-auto inline-block px-3">
        <p className="py-1 font-bold">{convertirFecha(released)}</p>
      </div>
      <p className="text-3xl font-semibold py-2">Recommended</p>
      <div>
        <p className="text-xl uppercase pb-2">rantings {ratings_count}</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        {ratings?.map((rating) => (
          <div
            className="flex items-center gap-3 flex-nowrap py-1  px-4 border rounded-full hover:scale-110 cursor-pointer transition-transform duration-300"
            key={rating.id}
          >
            <p className="text-xl">{rating.title}:</p>
            <p>{rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
