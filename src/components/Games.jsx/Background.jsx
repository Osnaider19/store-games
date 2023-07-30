import React from "react";

export const Background = ({ background }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background.replace(
          "media/games/",
          "media/resize/1280/-/games/"
        )})`,
        backgroundPosition: "top , center ",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="absolute left-0 top-0 w-full h-[550px]"
    >
      <div
        className="absolute left-0 top-0 w-full h-[1050px] z-10"
        style={{
          background:
            "linear-gradient( transparent , rgb(23, 20, 20) , rgb(23, 20, 20))",
        }}
      ></div>
      <div
        className="fixed left-0 pointer-events-none top-0 h-screen w-full 
       bg-black/50"
      ></div>
    </div>
  );
};
