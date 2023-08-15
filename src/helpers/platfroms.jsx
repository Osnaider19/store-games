import { BsPlaystation, BsNintendoSwitch, BsXbox } from "react-icons/bs";
import { AiFillWindows, AiOutlineGlobal } from "react-icons/ai";
import { SiPlaystation2, SiPlaystation3, SiPlaystation4 , SiPlaystation5} from "react-icons/si";
export const platfromsIcon = (plataforms) => {
  switch (plataforms) {
    case "pc":
      return <AiFillWindows />;
    case "playstation":
      return <BsPlaystation />;
    case "nintendo":
      return <BsNintendoSwitch />;
    case "xbox":
      return <BsXbox />;
    case "web":
      return <AiOutlineGlobal />;
    case "playstation2":
      return <SiPlaystation2 />;
    case "playstation3":
      return <SiPlaystation3 />;
    case "playstation4":
      return <SiPlaystation4 />;
    case "playstation5":
      return <SiPlaystation5 />;
    case "undefined":
      return;
  }
};
