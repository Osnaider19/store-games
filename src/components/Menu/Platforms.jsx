import { BsXbox, BsPlaystation, BsWindows, BsAndroid2 } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { ItemMenu } from "./ItemMenu";
export const Platforms = () => {
  return (
    <div>
      <span className="block text-xl font-bold py-2 px-1">Platforms</span>
      <ItemMenu
        link={`/platforms/1/Xbox One`}
        name={`Xbox One`}
        icon={<BsXbox />}
      />
      <ItemMenu
        link={`/platforms/27/PlayStation`}
        name={`PlayStation`}
        icon={<BsPlaystation />}
      />
      <ItemMenu link={`/platforms/4/Pc`} name={`Pc`} icon={<BsWindows />} />
      <ItemMenu
        link={`/platforms/21/Android`}
        name={`Android`}
        icon={<BsAndroid2 />}
      />
      <ItemMenu link={`/platforms/3/iOS`} name={`iOS`} icon={<AiFillApple />} />
    </div>
  );
};
