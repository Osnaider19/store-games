import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
export const RatingStar = ({ rating, votes }) => {
  return (
    <div className="relative py-1">
      <div className="flex ">
        {[...new Array(5)].map((star, index) => {
          {
            console.log(Math.floor(rating));
          }
          return index < Math.floor(rating) ? (
            <i className=" text-yellow-400" key={index}>
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
