import { useGamesDetails } from "../../hooks/useGamesDetails";

export const Background = () => {
  const { data } = useGamesDetails();
  const background = data?.details.background_image;
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background?.replace(
            "media/games/",
            "media/resize/1280/-/games/"
          )})`,
          backgroundPosition: "center , center ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute  left-0  w-full md:h-screen h-[50vh]"
      ></div>
      <div
        className="absolute left-0 top-0 w-full h-[50vh] md:h-[100vh] z-20"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, transparent, transparent, #181818, #181818)",
        }}
      ></div>
      <div
        className="absolute left-0 pointer-events-none top-0 h-screen w-full 
       bg-black/60"
      ></div>
    </>
  );
};
