
import { useFetch } from "../../hooks/useFech";
import { API_KEY, URL } from "../../config/config";

export const FiltersPlatforms = ({ updatePlatfroms }) => {
  const { data } = useFetch(`${URL}/platforms?key=${API_KEY}`);
   
  return (
    <select
      name="filters__date"
      onChange={(e) => updatePlatfroms(e.target.value)}
      id="countries"
      className="bg-[#121212] border border-[#ffffff50] text-white text-lg rounded-lg block w-full py-1 cursor-pointer md:w-[200px]"
    >
      {console.log(data)}
      {data?.results?.map((platform) => (
        <option
          key={platform.id}
          name="filters__platforms"
          value={platform.id}
          className="py-2 hover:bg-slate-900"
        >
          {platform.name}
        </option>
      ))}
    </select>
  );
};
