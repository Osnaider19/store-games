import React from "react";

export const Publisher = ({ publisher }) => {
  return (
    <div>
      <h3>Publisher</h3>
      {publisher?.map((publishe) => (
        <div key={publishe.id}>
          <span>{publishe.name}</span>
        </div>
      ))}
    </div>
  );
};
