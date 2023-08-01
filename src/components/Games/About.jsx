import React from "react";

export const About = ({ about }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold py-4">About</h2>
      <div
        dangerouslySetInnerHTML={{ __html: about }}
        className="[&>h3]:font-bold [&>h3]:text-3xl "
      />
    </div>
  );
};
