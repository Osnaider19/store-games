import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL, API_KEY } from "../../config/config";
export const ContextDetails = createContext();

export const ContextDetailsProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
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
    getData(`${URL}/games/${id}?key=${API_KEY}`);
  }, [id]);
  return (
    <ContextDetails.Provider value={{ data , isPending , error , setIsPending}}>
      {children}
    </ContextDetails.Provider>
  );
};
