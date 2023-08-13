import React from "react";

export const BackgroundCreators = ({ background }) => {
  return (
    <>
      <div
        className="absolute left-0 top-0 w-full h-full "
        style={{
          background: `url(${background?.replace(
            "media/",
            "media/resize/640/-/"
          )})`,
          backgroundPosition: "center , center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute left-0 top-0 w-full h-full bg-black/80"></div>
    </>
  );
};
