import { createContext } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { URL, API_KEY } from "../../config/config";
export const ContextPlatforms = createContext();

export const ContextPlatformsProvider = ({ children }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [date, setDate] = useState("");
  const [ordering, setOrdering] = useState("");
  
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
      setData(data);
      setError({ err: false });
    } catch (err) {
      setError(err);
    } finally {
      setIsPending(false);
    }
  };
  useEffect(() => {
    getData(
      `${URL}/games?key=${API_KEY}&platforms=${id}&page=${page}&ordering=${ordering}&dates=${date}`
    );
  }, [page, ordering, date , id]);

  function updateOrdering(value) {
    setIsPending(true);
    setPage(1);
    setOrdering(value);
  }
  function paginationNext() {
    setPage(page + 1);
    setIsPending(true);
  }
  function paginationPrevious() {
    setPage(page - 1);
    setIsPending(true);
  }
  function updateDate(value) {
    setDate(value);
    setIsPending(true);
    setPage(1);
  }
  function updatePlatfroms(value) {
    setPlatforms(value);
    setIsPending(true);
    setPage(1);
  }
  
  return (
    <ContextPlatforms.Provider
      value={{
        data,
        isPending,
        error,
        page,
        updateOrdering,
        paginationNext,
        paginationPrevious,
        updateDate,
        updatePlatfroms,
        setIsPending,
        setPage
      }}
    >
      {children}
    </ContextPlatforms.Provider>
  );
};
