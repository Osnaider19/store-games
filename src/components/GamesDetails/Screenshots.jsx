import React, { useContext } from "react";
import { useRef } from "react";
import { ContextScreen } from "../../Context/ContextScreen/ContextScreen";
export const Screenshots = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { data,  handleImageClick } =
    useContext(ContextScreen);

  return (
    <>
      {/* {console.log(data)} */}
      {data && (
        <div className="relative w-full bg-[#181818] py-4">
          <h3 className="text-3xl  font-semibold capitalize py-2">Screenshots</h3>
          <div className="flex flex-wrap gap-4 justify-between items-center">
            {data.results.map((img) => (
              <div key={img.id} className="w-full flex justify-center  overflow-hidden hover:scale-105 transition-transform duration-200 sm:max-w-[200px]  md:max-w-[400px] hover:saturate-150 ">
                <div>
                  <img
                    src={img.image.replace("media/", "media/resize/420/-/")}
                    alt=""
                    className="object-cover w-full h-full cursor-pointer "
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
