import React from "react";
import { Link } from "react-router-dom";
export const Page404 = () => {
  return (
    <div className="pt-[60px]">
      <div className="flex justify-center items-center flex-col w-full h-[90vh]">
        <div className="w-[60%] h-[60%]">
          <img
            src="../../404.png"
            alt=""
            className="block w-full h-full object-contain"
          />
        </div>
        <h1 className="text-6xl">ERROR 404 </h1>
        <p className="text-4xl">Not fount </p>
        <Link to={`/`}><span className="text-xl bg-[#44444480] hover:bg-[#444444] transition-colors duration-200 rounded-sm px-3 py-1 mt-3 block">Click here to go back</span></Link>
      </div>
    </div>
  );
};
