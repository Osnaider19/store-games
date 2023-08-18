import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
import { Link } from "react-router-dom";

export const Platforms = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div>
      <h3 className="text-lg opacity-70 font-semibold pt-3">Platforms</h3>
      <div className="flex py-1 flex-wrap w-full gap-4">
        {data?.platforms?.map((platform) => (
          <Link
            to={`/platforms/${platform.platform.id}/${platform.platform.name}`}
            key={platform.platform.id}
            className="hover:opacity-70 hover:underline"
          >
            <span>{platform.platform.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
