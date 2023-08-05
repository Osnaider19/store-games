import React, { useContext } from "react";
import { BsPlaystation, BsNintendoSwitch, BsXbox } from "react-icons/bs";
import { AiFillWindows, AiOutlineGlobal } from "react-icons/ai";
import { ContextDetails } from "../../Context/contextDetails/ContextDetails";
export const Platfroms = () => {
  const {data} = useContext(ContextDetails);
  const icon = (plataforms) => {
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
      case "undefined":
        return;
    }
  };
  return (
    <div className="flex gap-3 py-2">
      {data.parent_platforms?.map(({ platform }) => (
        <div key={platform.id}>
          <i className="text-2xl">{icon(platform.slug)}</i>
        </div>
      ))}
    </div>
  );
};
