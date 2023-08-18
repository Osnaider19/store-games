import React from "react";
import { CardSearch } from "./CardSearch";
import { useContext } from "react";
import { ContextSearch } from "../../Context/ContextSearch/ContextSearch";
export const Results = () => {
  const { data , setInput  }= useContext(ContextSearch);
  return (
    <>
    {console.log(data)}
      <div
        className="fixed left-0 top-0 w-full h-full -z-10 "
        onClick={() => {
          setInput("");
        }}
      ></div>
      <div className="content__results">
        <div className="content__results__search">
          <div className="relative w-full h-full flex flex-wrap  px-3 py-3 gap-2">
            {data?.results?.length !== 0 ? (
              <CardSearch games={data.results} setInput={setInput} />
            ) : (
              <div className="pt-10 w-full">
                <p className="text-3xl text-center">Sin resultados</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
