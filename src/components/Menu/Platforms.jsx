import { BsXbox, BsPlaystation, BsWindows, BsAndroid2 } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { ItemMenu } from "./ItemMenu";
export const Platforms = () => {
  return (
    <div>
      <span className="block text-xl font-bold py-2 px-1">Platforms</span>
      <ItemMenu link={`/platforms/1`} name={`Xbox One`} icon={<BsXbox />} />
      <ItemMenu link={`/platforms/27`} name={`PlayStation`} icon={<BsPlaystation />} />
      <ItemMenu link={`/platforms/4`} name={`Pc`} icon={<BsWindows />} />
      <ItemMenu link={`/platforms/21`} name={`Android`} icon={<BsAndroid2 />} />
      <ItemMenu link={`/platforms/3`} name={`iOS`} icon={<AiFillApple />} />
    </div>
  );
};
