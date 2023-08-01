import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { convertirFecha } from "../../helpers/convertirFecha";
import { Background } from "./Background";
import { About } from "./About";
import { Screenshots } from "./Screenshots";
import { Ratings } from "./Ratings";
import { Platfroms } from "./Platfroms";
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
                  <div className="flex flex-col max-w-[70%] ">
                    <h1 className="text-5xl py-3 font-bold">{data.name}</h1>
                    <Ratings
                      ratings={data.ratings}
                      ratings_count={data.ratings_count}
                      released={data.released}
                    />
                    <div>
                      <p className="text-xl">Metascore {data.metacritic}</p>
                    </div>
                    <div>
                      <Platfroms Platfroms={data.parent_platforms} />
                    </div>
                    
                  </div>

                  <div className="w-[50%]">
                    
                  </div>
                </div>
                <Screenshots id={data.id} />
                <About about={data.description} />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
