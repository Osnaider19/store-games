import { ordering } from "./filters";
import { useFetch } from "../../hooks/useFech";
import { URL, API_KEY } from "../../config/config";
export const Filters = ({ setDate, setOrdering, setIsPending, setPage }) => {
  const { data } = useFetch(`${URL}/games?key=${API_KEY}`);
  const onChangeSelectDate = (e) => {
    setDate(e.target.value), setIsPending(true), setPage(1);
  };
  const onChangeSelectOrdering = (e) => {
    setOrdering(e.target.value), setIsPending(true), setPage(1);
  };
  return (
    <div className="py-4 flex  relative w-full sm:w-auto ">
      <div className="flex w-full flex-col items-center  gap-2 sm:flex-row sm:w-auto md:px-5">
        <select
          name="filters__date"
          onChange={(e) => onChangeSelectDate(e)}
          id="countries"
          className="bg-[#121212] border border-[#ffffff50] text-white text-lg rounded-lg block w-full py-1 cursor-pointer md:w-[200px]"
        >
          <option>Release date</option>
          {data?.filters?.years?.map((year) => (
            <option
              key={year.count}
              name="filters__date"
              value={year.filter}
              className="py-2 hover:bg-slate-900"
            >
              {year.decade} - {year.to}
            </option>
          ))}
        </select>
        <select
          name="filters__ordering"
          onChange={(e) => onChangeSelectOrdering(e)}
          id="filters__ordering"
          className="bg-[#121212] border border-[#ffffff50] text-white text-lg rounded-lg block w-full py-1 cursor-pointer md:w-[200px]"
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
  );
};
