import React from "react";

export const Developers = ({ developers }) => {
  return (
    <div>
      <p className="text-lg font-semibold">Developers</p>
      {developers.map((developer) => (
        <div key={developer.id}>
          <p>{developer.name}</p>
        </div>
      ))}
    </div>
  );
};
