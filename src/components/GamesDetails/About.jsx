import React, { useRef } from "react";
import "./about.css";
import { useGamesDetails } from "../../hooks/useGamesDetails";
export const About = () => {
  const buttonMo = useRef();
  const contentText = useRef();
  const contentGradiend = useRef();
  function extensText() {
    contentText.current.classList.toggle("expanded");
    if (contentText.current.classList.contains("expanded")) {
      buttonMo.current.textContent = "show less";
      contentGradiend.current.style.display = "none"
    } else {
      buttonMo.current.textContent = "read more";
      contentGradiend.current.style.display = "block"
    }
  }
  const { data } = useGamesDetails();
  const description = data?.details?.description;
  return (
    <div className="pb-10">
      <h2 className="title__about">About</h2>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="container__text__about"
        ref={contentText}
      />
      <div className="container__read__more">
      <div className="container__lineragradiend" ref={contentGradiend}></div>
        <span className="read__more" onClick={extensText} ref={buttonMo}>
          read more
        </span>
      </div>
    </div>
  );
};
