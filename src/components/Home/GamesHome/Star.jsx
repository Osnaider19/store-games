import React from "react";
import { HiStar } from "react-icons/hi";
export const Star = ({ rating }) => {
  return (
    <div className="flex items-center gap-2 pt-1">
      <i className="text-xl text-yellow-400">
        <HiStar />
      </i>
      <p>{rating}</p>
    </div>
  );
};
