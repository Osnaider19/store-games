import React from "react";
import { BsXbox, BsPlaystation, BsWindows, BsAndroid2 } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { ItemMenu } from "./ItemMenu";
export const Plataforms = () => {
  return (
    <div>
      <span className="block text-xl font-bold py-2 px-1">Platforms</span>
      <ItemMenu link={`#`} name={`Xbox One`} icon={<BsXbox />} />
      <ItemMenu link={`#`} name={`PlayStation`} icon={<BsPlaystation />} />
      <ItemMenu link={`#`} name={`Pc`} icon={<BsWindows />} />
      <ItemMenu link={`#`} name={`Android`} icon={<BsAndroid2 />} />
      <ItemMenu link={`#`} name={`iOS`} icon={<AiFillApple />} />
    </div>
  );
};
