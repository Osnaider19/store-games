import React from "react";

export const Error = ({ status, statusText }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <span className="text-3xl font-semibold py-3">
        {status} {statusText}
      </span>
    </div>
  );
};
