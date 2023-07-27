import React from "react";
import { Button } from "./Button";
import "./index.css";
import { useRef } from "react";
import { handelScrollLeft, handelScrollRigth } from "./FuntionScroll";
export const SliderCapture = ({ capture }) => {
  const refSliderCapture = useRef();
  return (
    <>
      <div className="relative w-full  content-img-capture">
        <Button
          scrollLeft={() => {
            handelScrollLeft(refSliderCapture);
          }}
          scrollRigth={() => {
            handelScrollRigth(refSliderCapture);
          }}
        />
        <div
          className="relative w-full flex  flex-nowrap max-w-[300px] h-[310px] scroll-smooth snap-mandatory snap-x overflow-hidden transition-all duration-200 "
          ref={refSliderCapture}
        >
          {capture?.map((capture) => (
            <div className="relative min-w-full min-h-full snap-center" key={capture.id}>
              <img
                loading="lazy"
                src={capture.image.replace("media/", `media/crop/600/400/`)}
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
