import { createContext } from "react";
import { API_KEY, URL } from "../../config/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const ContextScreen = createContext();

export const ContextScreenProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [stateModal, setStateModal] = useState(false);
  const [filter, setFilter] = useState([]);

  const handleImageClick = (imgId) => {
    setStateModal(true);
    const imgFilter = data.results.find((screen) => screen.id === imgId);
    setFilter(imgFilter);
    // console.log(filter);
    document.documentElement.style.overflow = "hidden"
  };

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
    getData(`${URL}/games/${id}/screenshots?key=${API_KEY}&page_size=10`);
  }, [id]);
  return (
    <ContextScreen.Provider
      value={{
        data,
        isPending,
        error,
        setIsPending,
        stateModal,
        setStateModal,
        filter,
        handleImageClick,
      }}
    >
      {children}
    </ContextScreen.Provider>
  );
};
