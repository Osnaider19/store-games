import "./style-search.css";
import { useState } from "react";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { Link } from "react-router-dom";
import { CardSearch } from "./CardSearch";
import { Background } from "../Games/Background";

export const Search = () => {
  const [input, setInput] = useState("");

  const { data, isPending, setIsPending } = useFetch(
    `${URL}/games?search=${input}&key=${API_KEY}`
  );

  return (
    <>
      {console.log(data)}
      <div className="header">
        <div className="container-search">
          <input
            type="text"
            placeholder="search"
            className="input-search"
            onChange={(e) => {
              setInput(e.target.value);
              setIsPending(true);
            }}
          />
          {input && (
            <>
              <div
                className="fixed left-0 top-0 w-full h-full -z-10 "
                onClick={() => {
                  setInput("");
                }}
              ></div>
              <div className="content__results">
                <div className="content__results__search">
                  <div className="relative w-full h-full flex flex-wrap  px-3 py-3 gap-1">
                    {data.results.length !== 0 ? (
                      <CardSearch games={data.results} />
                    ) : (
                      <div className="pt-10 w-full">
                        <p className="text-3xl text-center">Sin resultados</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
