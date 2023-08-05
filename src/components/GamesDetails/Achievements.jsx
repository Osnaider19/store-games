import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFech";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
import { API_KEY } from "../../config/config";
export const Achievements = () => {
  const { data:ide } = useContext(ContextDetails);

  const { data } = useFetch(
    `https://api.rawg.io/api/games/${ide.id}/stores?key=${API_KEY}`
  );
  return <div>{console.log(data)}</div>;
};
