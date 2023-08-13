import "./style-search.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Results } from "./Results";
import { useContext } from "react";
import { ContextSearch } from "../../Context/ContextSearch/ContextSearch";
import { handelvisiblemenu } from "../../helpers/menuVisible";
export const Search = () => {
  const { input, setIsPending, setInput } = useContext(ContextSearch);

  
  return (
    <>
      <div className="header">
        <div className="absolute left-5  top-0 flex justify-center items-center h-full py-2 z-50">
          <button
            onClick={handelvisiblemenu}
          >
            <i className="text-4xl ">
              <AiOutlineMenu />
            </i>
          </button>
        </div>
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
          {input && <Results />}
        </div>
      </div>
    </>
  );
};
