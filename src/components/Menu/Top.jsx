import React from "react";
import { ItemMenu } from "./ItemMenu";
import { IconBestYears } from "./IconBestYears";
import { IconBestLast } from "./IconBestLast";
function Top() {
  return (
    <div>
      <span className="block text-xl  py-2 px-1">Top</span>
      <ItemMenu
        icon={<IconBestLast />}
        link={`/discover/last-30-days`}
        name={"Last 30 days"}
      />
      <ItemMenu
        icon={<IconBestYears />}
        link={`/discover/best-year`}
        name={"Best of the years"}
      />
    </div>
  );
}

export default Top;
