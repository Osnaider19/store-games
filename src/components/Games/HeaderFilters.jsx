import { useContext } from "react";
import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";
import { ContextGames } from "../../Context/ContextGames/ContextGames";
import { ordering } from "./filterOrdering";
export const HeaderFilters = () => {
  const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
  const { setDate, setOrdering, setIsPending } = useContext(ContextGames);

  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-6xl font-semibold py-4">All games </h1>
      <div className="py-4 ">
        <div className="flex gap-7 px-3">
          <select
            name="filters__date"
            onChange={(e) => {
              setDate(e.target.value), setIsPending(true);
            }}
            id="countries"
            className="bg-[#121212] border text-white text-lg rounded-lg focus:ring-yellow-400 focus:border-yellow-400 selection:border-yellow-400  block w-full p-2.5 cursor-pointer"
          >
            <option >Release date</option>
            {data?.filters?.years?.map((year) => (
              <option
                key={year.count}
                name="filters__date"
                value={year.filter}
                className="px-2 cursor-pointer hover:bg-yellow-400"
              >
                {year.decade} - {year.to}
              </option>
            ))}
          </select>
          <select
            name="filters__ordering"
            onChange={(e) => {
              setOrdering(e.target.value), setIsPending(true);
            }}
            id="filters__ordering"
            className="bg-[#121212] border text-white text-lg rounded-lg focus:ring-yellow-400 focus:border-yellow-400 selection:border-yellow-400  block w-full p-2.5 cursor-pointer px-3"
          >
            <option value="" id="filters__ordering" name="filters__ordering">
              Order by popularity
            </option>
            {ordering?.map((order, index) => (
              <option
                key={index}
                value={order.value}
                id="filters__ordering"
                name="filters__ordering"
              >
                {order.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
