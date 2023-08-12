import { useContext } from "react";
import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";
import { ContextGames } from "../../Context/ContextGames/ContextGames";
import { ordering } from "./filterOrdering";
export const HeaderFilters = () => {
  const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
  const { setDate, setOrdering, setIsPending } = useContext(ContextGames);

  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-semibold py-4">All games </h1>
      <div className="py-4 ">
        <div className="flex gap-7">
          <select
            name="filters__date"
            onChange={(e) => {
              setDate(e.target.value), setIsPending(true);
            }}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Release date</option>
            {data?.filters?.years?.map((year) => (
              <option
                key={year.count}
                name="filters__date"
                value={year.filter}
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
            className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" id="filters__ordering" name="filters__ordering">
              Order by popularity
            </option>
            {ordering?.map((order , index) => (
              <option
                key={index}
                value={order.value}
                id="filters__ordering"
                name="filters__ordering"
                className=""
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
