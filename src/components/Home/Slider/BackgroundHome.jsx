import React from "react";

export const BackgroundHome = ({ background }) => {
  return (
    <>
      <div
        style={{
          background: `url(${background.replace("media/", `media/resize/1280/-/`)})`,
          backgroundPosition: "center , center ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[50vh] w-full md:h-full absolute left-0 top-0 "
      >
        <div
          className="absolute left-0 pointer-events-none top-0 h-screen w-full 
        bg-black/10"
        ></div>
         <div
        className="absolute left-0 top-0 w-full h-[90vh] md:h-[1050px] z-10"
        style={{
          background:
            "linear-gradient( transparent , rgb(18, 18, 18) , rgb(18, 18, 18))",
        }}
      ></div>
      </div>
    </>
  );
};
