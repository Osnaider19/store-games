import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const options = {
    headers: {
      "content-type": "aplicación/json",
    },
    boby: {
      rating: 0,
    },
  };

  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await fetch(url, options);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();
        console.log(data)
        setIsPending(false);
        setData(data.results);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
