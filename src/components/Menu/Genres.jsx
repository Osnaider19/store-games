import React from "react";
import { ItemMenu } from "./ItemMenu";
import {
  Action,
  Adventure,
  Puzzle,
  RPG,
  Racing,
  Shooter,
  Sports,
  Strategy,
} from "./ImagesGenres";
export const Genres = () => {
  return (
    <div>
      <span className="block text-xl font-bold py-2 px-1">Genres</span>
      <ItemMenu icon={<Action />} link={`genres/action`} name={"Action"} />
      <ItemMenu icon={<Adventure />} link={`genres/adventure`} name={"Adventure"} />
      <ItemMenu icon={<Strategy />} link={`genres/strategy`} name={"Strategy"} />
      <ItemMenu icon={<Shooter />} link={`genres/shooter`} name={"Shooter"} />
      <ItemMenu icon={<Sports />} link={`genres/sports`} name={"Sports"} />
      <ItemMenu icon={<Puzzle />} link={`genres/puzzle`} name={"Puzzle"} />
      <ItemMenu icon={<Racing />} link={`genres/racing`} name={"Racing"} />
      <ItemMenu icon={<RPG />} link={`genres/role-playing-games-rpg`} name={"RPG"} />
    </div>
  );
};
