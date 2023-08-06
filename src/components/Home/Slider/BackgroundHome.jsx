import React from "react";

export const BackgroundHome = ({ background }) => {
  return (
    <>
      <div
        style={{
          background: `url(${background.replace("media/", `media/resize/1280/-/`)})`,
          backgroundPosition: "top left ",
          backgroundSize: "cover",
        }}
        className="w-full h-full absolute left-0 top-0 "
      >
        <div
          className="fixed left-0 pointer-events-none top-0 h-screen w-full 
        bg-black/10"
        ></div>
         <div
        className="absolute left-0 top-0 w-full h-[1050px] z-10"
        style={{
          background:
            "linear-gradient( transparent , rgb(18, 18, 18) , rgb(18, 18, 18))",
        }}
      ></div>
      </div>
    </>
  );
};
