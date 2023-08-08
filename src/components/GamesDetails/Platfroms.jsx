import React, { useContext } from "react";

import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
import { platfromsIcon } from "../../helpers/platfroms";
export const Platfroms = () => {
  const { data } = useContext(ContextDetails);

  return (
    <div className="flex gap-3 py-4">
      {data.parent_platforms?.map(({ platform }) => (
        <div key={platform.id}>
          <i className="text-2xl">{platfromsIcon(platform.slug)}</i>
        </div>
      ))}
    </div>
  );
};
