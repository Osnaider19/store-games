import { createContext } from "react";
import { useState, useEffect } from "react";
import { URL, API_KEY } from "../../config/config";
export const ContextBestYear = createContext();

export const ContextBestYearProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [ordering, setOrdering] = useState("-added");
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
      `${URL}/games?key=${API_KEY}&dates=2023-01-01,2023-12-31&ordering=${ordering}&page=${page}`
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
    <ContextBestYear.Provider
      value={{
        data,
        isPending,
        error,
        page,
        updateOrdering,
        paginationNext,
        paginationPrevious,
      }}
    >
      {children}
    </ContextBestYear.Provider>
  );
};
