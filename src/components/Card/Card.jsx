import React from "react";
import { convertirFecha } from "../../helpers/convertirFecha";
import { GenresGames } from "../Home/GamesHome/GenresGames";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
export const Card = ({ img, name, id, genres, date, rating }) => {
  return (
    <div className="relative w-full max-w-[170px]  md:max-w-[250px] h-full md:min-w-[250px] overflow-hidden">
      <div className="relative pb-7 rounded-sm overflow-hidden">
        <Link to={`/games/${id}`}>
          <div className="w-full h-full min-h-[150px] max-h-[150px] min-w-full relative">
            <div className="absolute left-0 top-0 w-full h-full z-[1] hover:bg-[#88727650] transition-colors duration-200" ></div>
            <img
              src={
                img
                  ? img?.replace("media/", `media/resize/420/-/`)
                  : "../../nocargimg.png"
              }
              alt={name}
              loading="lazy"
              className={`w-full h-full saturate-150 hover:  min-h-[150px] max-h-[150px] min-w-full ${
                img ? "object-cover" : "object-contain"
              }`}
            />
          </div>
          <p className="text-xl px-2 py-1 font-semibold hover:opacity-80">
            {name}
          </p>
        </Link>
        <div className="px-2">
          <div></div>
          <div className="flex items-center gap-2 pt-1">
            <i className="text-xl text-yellow-400">
              <HiStar />
            </i>
            <p>{rating}</p>
          </div>
          <GenresGames genres={genres} />
          <div>
            <p>{convertirFecha(date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="content__card">
//   <Link to={`/games/${id}`}>
//     <div className="content__img__card">
//       <img src={img
//             ? img?.replace("media/", `media/resize/420/-/`)
//             : "../../nocargimg.png"} alt=""/>
//     </div>
//     <div>
//       <p>{name}</p>
//     </div>
//   </Link>
// </div>
