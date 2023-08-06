import React from "react";
import { useFetch } from "../../hooks/useFech";
import { API_KEY } from "../../config/config";
import { Link } from "react-router-dom";

export const Genres = () => {
  const { data } = useFetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  console.log(data);
  return (
    <div className="relative z-50 bg-[#121212]">
      <div className="px-8">
        <h2 className="text-4xl font-semibold ">Genres</h2>
        <ul className="flex flex-wrap gap-4 py-5">
          {data?.results.map((genre) => (
            <li className="w-full max-w-[200px] h-[115px]" key={genre.id} >
              <Link to={`/genres/${genre.slug}`}>
                <div className="relative w-full max-w-[200px] h-[115px] hover:scale-110 transition-transform duration-300">
                  <img
                    src={genre.image_background?.replace(
                      "media/",
                      `media/resize/420/-/`
                    )}
                    alt={genre.name}
                    loading="lazy"
                    className="w-full h-full object-cover min-w-full min-h-full "
                  />
                  <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center bg-black/30">
                     <span className="text-2xl font-semibold text-center">{genre.name}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
