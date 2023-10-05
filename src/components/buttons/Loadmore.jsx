import React from "react";

export const Loadmore = ({ fetchNextPage }) => {
  return (
    <div className="w-full flex justify-center items-center ">
      <button
        className="px-4 py-2 rounded-md bg-[#44444480] hover:bg-[#444444e6] capitalize"
        onClick={fetchNextPage}
      >
        load more
      </button>
    </div>
  );
};
