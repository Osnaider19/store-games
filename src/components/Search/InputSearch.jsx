import React from "react";
import "./index.css";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { useState } from "react";
import { Card } from "../Card/Card";
import { LoaderCard } from "../Loader/LoaderCard";
export const InputSearch = () => {
  const [input, setInput] = useState("");
  const { data  , isPending ,  setIsPending , error } = useFetch(`${URL}/games?search=${input}&key=${API_KEY}`);

  return (
    <div>
      {console.log(data)}
      <div className="header">
        <div className="container-search">
          <input
            type="text"
            placeholder="search games"
            className="input-search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setIsPending(true)
              ;
            }}
          />
        </div>
      </div>
      {isPending && <LoaderCard/>}
      <div className="relative py-4 flex flex-wrap gap-5 justify-between px-1">
        {data &&
          data.results.map((games) => (
            <div className="relative rounded-lg max-w-[350px] h-full min-w-[350px]  overflow-hidden" key={games.id}>
              <Card
                capture={games.short_screenshots}
                genres={games.genres}
                name={games.name}
                id={games.id}
                date={games.released}
                star={games.rating}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
