import { createContext } from "react";
import { API_KEY, URL } from "../../config/config";
import { useState, useEffect } from "react";
export const ContextSearch = createContext();

export const ContextSearchProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const getData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      }
      const data = await res.json();
      setIsPending(false);
      setData(data);
      setError({ err: false });
    } catch (err) {
      setIsPending(true);
      setError(err);
    }
  };
  useEffect(() => {
    getData(`${URL}/games?search=${input}&key=${API_KEY}`);
  }, [input]);
  return (
    <ContextSearch.Provider
      value={{ data, isPending, error, setIsPending, input, setInput }}
    >
      {children}
    </ContextSearch.Provider>
  );
};
