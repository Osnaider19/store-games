import React from "react";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
import { useParams } from "react-router-dom";
export const ShoppingStore = () => {
  const { id } = useParams();
  const { data } = useFetch(`${URL}/games/${id}/stores?key=${API_KEY}`);
  const extractDomainName = (url) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    const hostname = anchor.hostname;
    return hostname.split(".")[1];
  };
  return (
    <div>
        {console.log(data)}
      <div>
        <h4 className="text-xl py-1 font-semibold">Where to buy</h4>
        <div className="flex gap-2 py-2">
          {data?.results?.map((store) => (
            <a href={store.url} key={store.id} target="_blank">
              <div className="capitalize py-2 px-3 bg-[#44444480] rounded-md hover:bg-[#444444e6] transition-colors duration-200">
                {extractDomainName(store.url)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
