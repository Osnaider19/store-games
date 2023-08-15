import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import "./ModalScreenshots.css";
import { ContextScreen } from "../../Context/ContextScreen/ContextScreen";
export const ModalScreenshots = () => {
  const { filter, data, setStateModal } = useContext(ContextScreen);
  function openModal() {
    setStateModal(false);
    document.documentElement.style.overflow = "auto";
  }
  return (
    <div className="container__modal">
      <div className="conatiner__button__close__modal">
        <button className="close__modal" onClick={openModal}>
          <i className="icon_close">
            <AiFillCloseCircle />
          </i>
        </button>
      </div>
      <div className="relative flex justify-center items-center w-[85%] h-[85%] z-50 rounded-lg overflow-hidden">
        <div className="relative flex justify-center items-center w-full h-full overflow-hidden rounded-xl">
          <div className="h-full w-full">
            <img
              src={filter.image?.replace("media/", "media/resize/1280/-/")}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
