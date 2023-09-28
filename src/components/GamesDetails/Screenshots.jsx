import { useGamesDetails } from "../../hooks/useGamesDetails";
export const Screenshots = () => {
  const { data } = useGamesDetails();
  const screenshots = data?.screenshots.results;
  const handleImageClick = (imgId) => {
    const imgFilter = screenshots.find((screen) => screen.id === imgId);
    console.log(imgFilter);
    //document.documentElement.style.overflow = "hidden";
  };
  return (
    <>
      {/* {console.log(data)} */}
      {screenshots && (
        <div className="relative w-full bg-[#181818] py-4">
          <h3 className="text-3xl  font-semibold capitalize py-2">
            Screenshots
          </h3>
          <div className="flex flex-wrap gap-4 justify-between items-center">
            {screenshots?.map((img) => (
              <div
                key={img.id}
                className="w-full flex justify-center  overflow-hidden hover:scale-105 transition-transform duration-200 sm:max-w-[200px]  md:max-w-[400px] hover:saturate-150 "
              >
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
