import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
export const RatingStar = ({ rating , votes}) => {
  return (
    <div className="relative py-1">
      <h2>Calificación</h2>
      <div className="flex ">
        {[...new Array(5)].map((star, index) => {
          {
            console.log(Math.floor(rating));
          }
          return index < Math.floor(rating) ? (
            <i className="text-2xl text-yellow-400">
              <HiStar />
            </i>
          ) : (
            <i className="text-2xl text-white">
              <HiStar />
            </i>
          );
        })}
      </div>
      <div>
        <p>Total votos</p>
        <p>{votes}</p>
      </div>
    </div>
  );
};
