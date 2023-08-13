import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
import { Link } from "react-router-dom";

export const Developers = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div>
      <p className="text-lg">Developers</p>
      {data.developers?.map((developer) => (
        <div key={developer.id}>
          <Link to={`/developers/${developer.slug}`} className="hover:underline">
            <span>{developer.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
