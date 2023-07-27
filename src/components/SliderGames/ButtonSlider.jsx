import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
export const ButtonSlider = ({ scrollLeft, scrollRigth }) => {
  return (
    <>
      <div className="flex justify-between  w-full py-1 items-center">
        <h1 className="py-3 text-3xl font-bold">Juegos Populares</h1>
        <div className="gap-2 flex ">
          <div className="py-2">
            <i className="rounded-full px-2 py-2 flex justify-center items-center cursor-pointer bg-[#302f2f]" onClick={scrollRigth}>
              <MdArrowBackIosNew  />
            </i>
          </div>
          <div className="py-2">
            <i
              className="rounded-full px-2 py-2 flex justify-center items-center cursor-pointer bg-[#302f2f]
            " onClick={scrollLeft} 
            >
              <MdArrowForwardIos />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};
