import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";

export const Background = () => {
  const { data } = useContext(ContextDetails);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${data.background_image?.replace(
            "media/games/",
            "media/resize/1280/-/games/"
          )})`,
          backgroundPosition: "center , center ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute  left-0  w-full h-screen"
      ></div>
      <div
        className="absolute left-0 top-0 w-full h-[100vh] z-20"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, transparent, transparent, #181818, #181818)",
        }}
      ></div>
      <div
        className="absolute left-0 pointer-events-none top-0 h-screen w-full 
       bg-black/60"
      ></div>
    </>
  );
};
