
import { Android } from "./Android";
import { Apple } from "./Apple";
import { ItemMenu } from "./ItemMenu";
import { Playstation } from "./PlayStation";
import { Window } from "./Window";
import { Xbox } from "./Xbox";
export const Platforms = () => {
  return (
    <div>
      <span className="block text-xl py-2 px-1">Platforms</span>
      <ItemMenu
        link={`/platforms/1/Xbox One`}
        name={`Xbox One`}
        icon={<Xbox />}
      />
      <ItemMenu
        link={`/platforms/27/PlayStation`}
        name={`PlayStation`}
        icon={<Playstation />}
      />
      <ItemMenu link={`/platforms/4/Pc`} name={`Pc`} icon={<Window />} />
      <ItemMenu
        link={`/platforms/21/Android`}
        name={`Android`}
        icon={<Android />}
      />
      <ItemMenu link={`/platforms/3/iOS`} name={`iOS`} icon={<Apple />} />
    </div>
  );
};
