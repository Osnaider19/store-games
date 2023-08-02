import "./style-search.css";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { Link } from "react-router-dom";

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
            <div className="absolute left-0 top-[60px] w-full overflow-hidden overflow-y-auto  rounded-2xl  bg-blue-600">
              <div className="relative w-full h-full flex flex-wrap overflow-y-auto px-3 py-3 gap-1">
                {data.results?.map((game) => (
                  <Link to={`/games/${game.id}`} className="w-full rounded-lg overflow-hidden hover:bg-black/50">
                    <div className="relative flex  gap-2 min-w-full ">
                      <div className="">
                      <img
                        src={game.background_image?.replace(
                          "media/",
                          `media/resize/420/-/`
                        )}
                        alt=""
                        loading="lazy"
                        className="w-[100px] h-[100px] object-cover rounded-lg overflow-hidden"
                      />
                      </div>
                      <p>{game.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
