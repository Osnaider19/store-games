import { AiFillCloseCircle } from "react-icons/ai";
import "./ModalScreenshots.css";
export const ModalScreenshots = ({stateModal ,setStateModal ,filter}) => {
  function openModal() {
     setStateModal(false);
     document.documentElement.style.overflow = "auto";
  }
  return (
    <div className={`container__modal ${stateModal ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
      <div className="conatiner__button__close__modal">
        <button className="close__modal" onClick={openModal}>
          <i className="icon_close">
            <AiFillCloseCircle />
          </i>
        </button>
      </div>
      <div className="relative flex w-full h-auto justify-center items-center md:w-[85%] md:h-[85%] z-50 rounded-lg overflow-hidden">
        <div className="relative flex justify-center items-center w-full h-full overflow-hidden rounded-xl">
          <div className="h-full w-full">
            <img
              src={filter?.image?.replace("media/", "media/resize/1280/-/")}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
