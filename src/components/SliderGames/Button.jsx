import React from "react";
import "./index.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
export const Button = () => {
  return (
    <div className="content-button-capture">
      <div>
        <i className="text-3xl absolute left-0 px-1 py-1 cursor-pointer hover:scale-125 transition-all duration-200">
          <MdArrowBackIosNew />
        </i>
      </div>
      <div>
        <i className="text-3xl absolute right-0 px-1 py-1 cursor-pointer hover:scale-125 transition-all duration-200">
          <MdArrowForwardIos />
        </i>
      </div>
    </div>
  );
};
