import React from "react";
import { AiOutlineArrowRight , AiOutlineArrowLeft} from "react-icons/ai";

export const Pagination = ({previous , next , paginationNext , paginationPrevious }) => {
  return (
    <div className="flex justify-center  items-center py-5 gap-4 hover:[&>button]:left-4">
      {previous && (
        <button
          className="py-3 flex text-xl justify-center items-center gap-2  capitalize  px-3 bg-[#44444480] rounded-md hover:bg-[#444444e6] transition-colors duration-200 "
          onClick={paginationPrevious}
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
          onClick={paginationNext}
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
