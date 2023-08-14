import React from "react";
import { AiOutlineArrowRight , AiOutlineArrowLeft} from "react-icons/ai";

export const Pagination = ({previous , next , setPage , page , setIsPending }) => {
  return (
    <div className="flex justify-center  items-center py-5 gap-4 hover:[&>button]:left-4">
      {previous && (
        <button
          className="py-3 flex text-xl justify-center items-center gap-2  capitalize  px-3 bg-[#44444480] rounded-md hover:bg-[#444444e6] transition-colors duration-200 "
          onClick={() => {
            setPage(page - 1);
            setIsPending(true);
          }}
        >
          <i className="">
            <AiOutlineArrowLeft />
          </i>
          back
        </button>
      )}
      {next && (
        <button
          className="py-3 flex text-xl justify-center items-center gap-2  capitalize  px-3 bg-[#44444480] rounded-md hover:bg-[#444444e6] transition-colors duration-200  "
          onClick={() => {
            setPage(page + 1);
            setIsPending(true);
          }}
        >
          next
          <i className="">
            <AiOutlineArrowRight />
          </i>
        </button>
      )}
    </div>
  );
};
