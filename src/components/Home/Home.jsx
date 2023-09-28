import { Games } from "./GamesHome/Games";
import { Genres } from "./Genres";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";
export const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <Games />
      <Genres />
      <div className="px-4 md:px-8">
        <Footer />
      </div>
    </>
  );
};
