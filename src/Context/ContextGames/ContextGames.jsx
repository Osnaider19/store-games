import { createContext, useEffect, useState } from "react";
import { API_KEY, URL } from "../../config/config";
export const ContextGames = createContext();

export const ContextGamesProvider = ({ children }) => {
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
      `${URL}/games?key=${API_KEY}&dates=${date}&page=${page}&ordering=${ordering}`
    );
  }, [page, date, ordering]);
  function updateDate(value) {
    setDate(value);
    setIsPending(true);
    setPage(1);
  }
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
  return (
    <ContextGames.Provider
      value={{
        data,
        isPending,
        setIsPending,
        setPage,
        setDate,
        date,
        page,
        error,
        ordering,
        setOrdering,
        updateOrdering,
        paginationNext,
        paginationPrevious,
        updateDate,
      }}
    >
      {children}
    </ContextGames.Provider>
  );
};
