import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { convertirFecha } from "../../helpers/convertirFecha";
import { Background } from "./Background";
export const GamesDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`${URL}/games/${id}?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}
      {data && (
        <Layout>
          <div className="relative  h-screen w-full flex overflow-hidden ">
            <Background background={data.background_image} />
            <div className="min-w-full">
              <div className="relative z-10 pt-10 pl-7">
                <div className="">
                  <h1 className="text-5xl py-3">{data.name}</h1>
                </div>
                <div>
                  <p className="w-[80%]">{data.description_raw}</p>
                  <p>{convertirFecha(data.released)}</p>
                  <p>Recommended </p>
                  {data.ratings.map((rating) => (
                    <div className="flex" key={rating.id}>
                      <p>{rating.title} : </p>
                      <p>{rating.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
