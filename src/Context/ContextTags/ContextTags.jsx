import { createContext, useEffect, useState } from "react";
import { API_KEY, URL } from "../../config/config";
import { useParams } from "react-router-dom";
export const ContextTags = createContext();

export const ContextTagsProvider = ({ children }) => {
  const { name } = useParams();
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
      `${URL}/games?key=${API_KEY}&tags=${name}&dates=${date}&page=${page}&ordering=${ordering}`
    );
  }, [page, date, ordering, name]);
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
    <ContextTags.Provider
      value={{
        data,
        isPending,
        page,
        error,
        updateOrdering,
        paginationNext,
        paginationPrevious,
        updateDate,
      }}
    >
      {children}
    </ContextTags.Provider>
  );
};
