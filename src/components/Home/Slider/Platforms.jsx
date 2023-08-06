import React from "react";
import { platfromsIcon } from "../../../helpers/platfroms";

export const Platforms = ({ platforms }) => {
  return (
    <div>
      <div className="flex gap-3 py-3">
        {platforms?.map(({ platform }) => (
          <div key={platform.id}>
            <i className="text-2xl">{platfromsIcon(platform.slug)}</i>
          </div>
        ))}
      </div>
    </div>
  );
};
