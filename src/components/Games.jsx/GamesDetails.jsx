import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
export const GamesDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`${URL}/games/${id}?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}
      <Layout>
        <div className="relative  h-screen w-full flex overflow-hidden ">
          <div className="min-w-full ">
            <div
              style={{
                backgroundImage: `url(${data?.background_image.replace(
                  "media/games/",
                  "media/resize/1280/-/games/"
                )})`,
                backgroundPosition: "top , center ",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-screen"
            >
              <div
                className="fixed left-0 pointer-events-none top-0 h-screen w-full 
                bg-[#00000099]"
              ></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
