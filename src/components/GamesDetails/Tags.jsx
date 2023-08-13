import React, { useContext } from "react";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
import { Link } from "react-router-dom";

export const Tags = () => {
  const { data } = useContext(ContextDetails);
  return (
    <div>
      <h4 className="text-lg opacity-70 font-semibold  py-2">Tags</h4>
      <div className="flex gap-3 flex-wrap  ">
        {data?.tags.map((tag) => (
          <Link
            to={`/tags/${tag.slug}`}
            className="hover:opacity-70 hover:underline"
            key={tag.id}
          >
            <span>{tag.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
