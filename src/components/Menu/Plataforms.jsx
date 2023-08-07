import { BsXbox, BsPlaystation, BsWindows, BsAndroid2 } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { ItemMenu } from "./ItemMenu";
export const Plataforms = () => {
  return (
    <div>
      <span className="block text-xl font-bold py-2 px-1">Platforms</span>
      <ItemMenu link={`/games/platforms/xbox-one`} name={`Xbox One`} icon={<BsXbox />} />
      <ItemMenu link={`/games/platforms/27`} name={`PlayStation`} icon={<BsPlaystation />} />
      <ItemMenu link={`/games/platforms/4`} name={`Pc`} icon={<BsWindows />} />
      <ItemMenu link={`/games/platforms/21`} name={`Android`} icon={<BsAndroid2 />} />
      <ItemMenu link={`/games/platforms/3`} name={`iOS`} icon={<AiFillApple />} />
    </div>
  );
};
