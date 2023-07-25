import React from "react";
import { Button } from "./Button";
import "./index.css";
export const SliderCapture = ({ capture }) => {
  return (
    <>
      <div className="relative w-full  bg-red-400 content-img-capture">
        <Button />
        <div className="relative w-full flex  flex-nowrap max-w-[300px] h-[310px] overflow-hidden overflow-x-scroll snap-mandatory  transition-all duration-200 ">
          {capture?.map((capture) => (
            <div className="min-w-full min-h-full" key={capture.id}>
              <img
                loading="lazy"
                src={capture.image}
                alt=""
                className="w-full min-w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
