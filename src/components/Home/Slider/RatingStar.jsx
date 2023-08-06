import React from "react";
import { HiStar } from "react-icons/hi";
export const RatingStar = ({ rating }) => {
  return (
    <div className="relative py-1">
      <div className="text-2xl"></div>
      <div className="flex ">
        {[...new Array(5)].map((star, index) => {
          return index < Math.floor(rating) ? (
            <i className="text-yellow-400" key={index}>
              <HiStar />
            </i>
          ) : (
            <i className=" text-white" key={index}>
              <HiStar />
            </i>
          );
        })}
      </div>
    </div>
  );
};
