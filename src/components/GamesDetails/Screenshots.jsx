import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ModalScreenshots } from "../Modals/ModalScreenshots";
import { useState } from "react";
import { ContextScreen } from "../../Context/ContextScreen/ContextScreen";
export const Screenshots = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { data, error, stateModal, setStateModal, filter, handleImageClick } =
    useContext(ContextScreen);

  return (
    <>
      {console.log(data)}
      {data && (
        <div className="relative">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {data.results.map((img) => (
              <div key={img.id} className="max-w-[210px] w-full">
                <div className="max-w-[210px] w-full">
                  <img
                    src={img.image.replace("media/", "media/resize/200/-/")}
                    alt=""
                    className="object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-200"
                    onClick={() => handleImageClick(img.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
