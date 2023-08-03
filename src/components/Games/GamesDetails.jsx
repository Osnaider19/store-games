import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { Background } from "./Background";
import { convertirFecha } from "../../helpers/convertirFecha";
import { About } from "./About";
import { Screenshots } from "./Screenshots";
import { Ratings } from "./Ratings";
import { Platfroms } from "./Platfroms";
import { Developers } from "./Developers";
import { Publisher } from "./Publisher";
export const GamesDetails = () => {
  const { id } = useParams();
  const { data } = useFetch(`${URL}/games/${id}?key=${API_KEY}`);
  return (
    <>
      {console.log(data)}
      {data && (
        <Layout>
          <div className="relative   w-full flex overflow-hidden ">
            
            <div className="min-w-full px-7 pt-16">
              <div className="relative z-10">
                <div className="relative flex w-full">
                  <div className="flex flex-col w-[70%]">
                    <h1 className="text-5xl py-3 font-bold">{data.name}</h1>
                    <div className="rounded-lg w-auto inline-block ">
                      <p className="py-2 font-bold">
                        {convertirFecha(data.released)}
                      </p>
                    </div>
                    <Ratings
                      ratings={data.ratings}
                      ratings_count={data.ratings_count}
                    />
                    <div className="py-2">
                      <p className="text-lg">Metascore</p>
                      <div className="py-1">
                        <span className="text-xl py-1 px-1 border rounded-lg">
                          {data.metacritic}
                        </span>
                      </div>
                    </div>
                    <Platfroms Platfroms={data.parent_platforms} />
                    <Developers developers={data.developers}/>
                    <Publisher publisher={data.publishers}/>
                  </div>
                  <div className="w-[50%]"></div>
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
