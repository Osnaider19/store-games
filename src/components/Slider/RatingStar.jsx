import React from "react";
import { HiStar } from "react-icons/hi";
export const RatingStar = ({ rating, votes }) => {
  return (
    <div className="relative py-1">
      <p className="font-semibold">Calificación</p>
      <div className="text-2xl"></div>
      <div className="flex ">
        {[...new Array(5)].map((star, index) => {
          return index < Math.floor(rating) ? (
            <i className=" text-yellow-400 text-2xl" key={index}>
              <HiStar />
            </i>
          ) : (
            <i className=" text-white text-2xl" key={index}>
              <HiStar />
            </i>
          );
        })}
      </div>
    </div>
  );
};
