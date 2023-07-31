import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { convertirFecha } from "../../helpers/convertirFecha";
import { Background } from "./Background";
import { About } from "./About";
import { Screenshots } from "./Screenshots";
export const GamesDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`${URL}/games/${id}?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}
      {data && (
        <Layout>
          <div className="relative   w-full flex overflow-hidden ">
            <Background background={data.background_image} />
            <div className="min-w-full px-7 pt-10">
              <div className="relative z-10">
                <div className="relative flex w-full">
                  <div className="flex flex-col w-[50%]">
                    <h1 className="text-5xl py-3">{data.name}</h1>
                    <div>
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
                  <div className="w-[50%]">
                    
                  </div>
                </div>
                <About about={data.description} />
                <Screenshots id={data.id} />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
