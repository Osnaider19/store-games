import { createContext, useEffect, useState } from "react";
import { API_KEY, URL } from "../../config/config";
import { last30Days } from "../../helpers/last30Days";
export const ContextLastDays = createContext();

export const ContextLastDaysProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
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
      `${URL}/games?key=${API_KEY}&dates=${last30Days()}&page=${page}&ordering=${ordering}`
    );
  }, [page, ordering]);

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
    <ContextLastDays.Provider
      value={{
        data,
        isPending,
        setIsPending,
        setPage,
        page,
        error,
        ordering,
        setOrdering,
        updateOrdering,
        paginationPrevious, 
        paginationNext
      }}
    >
      {children}
    </ContextLastDays.Provider>
  );
};
