import React from "react";
import "./about.css";
export const About = ({ about }) => {
  function extensText() {
    const readMoreButton = document.querySelector(".read__more");
    const textContainer = document.querySelector(".container__text__about");
    readMoreButton.addEventListener("click", () => {
      textContainer.classList.toggle("expanded");
      if (textContainer.classList.contains("expanded")) {
        readMoreButton.textContent = "show less";
      } else {
        readMoreButton.textContent = "read more";
      }
    });
  }
  return (
    <div className="pb-10">
      <h2 className="title__about">About</h2>
      <div
        dangerouslySetInnerHTML={{ __html: about }}
        className="container__text__about"
      />
      <div className="container__read__more">
        <span className="read__more" onClick={extensText}>
          read more
        </span>
      </div>
    </div>
  );
};
