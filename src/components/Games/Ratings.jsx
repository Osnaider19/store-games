import React from "react";
import { convertirFecha } from "../../helpers/convertirFecha";

export const Ratings = ({ ratings, ratings_count, released }) => {
  return (
    <div className="relative w-full">
      <div className="bg-black/50 rounded-lg w-auto inline-block px-3">
        <p className="py-1 font-bold">{convertirFecha(released)}</p>
      </div>
      <p className="text-3xl font-semibold py-2">Recommended</p>
      <div className="relative mb-2  py-1 px-3 border bg-black/80 rounded-xl flex items-center ">
        <p className="flex">{ratings_count} Rantings </p>
      </div>
      <div className="flex gap-1 items-center flex-wrap">
        {ratings?.map((rating) => (
          <div
            className="flex items-center gap-2 flex-nowrap py-1  px-4 border rounded-full  cursor-pointer bg-black/80"
            key={rating.id}
          >
            <p>{rating.title}:</p>
            <p>{rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
