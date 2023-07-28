import React from "react";
import { ItemMenu } from "./ItemMenu";
import { Action, Adventure, Puzzle, RPG, Racing, Shooter, Sports, Strategy } from "./ImagesGenres";
export const Genres = () => {
  return (
    <div>
      <span className="block text-xl font-bold py-2 px-1">Generos</span>
      <ItemMenu icon={<Action/>} link={`#`} name={"Action"} />
      <ItemMenu icon={<Adventure />} link={`#`} name={"Adventure"} />
      <ItemMenu icon={<Strategy />} link={`#`} name={"Strategy"} />
      <ItemMenu icon={<Shooter />} link={`#`} name={"Shooter"} />
      <ItemMenu icon={<Sports />} link={`#`} name={"Sports"} />
      <ItemMenu icon={<Puzzle />} link={`#`} name={"Puzzle"} />
      <ItemMenu icon={<Racing />} link={`#`} name={"Racing"} />
      <ItemMenu icon={<RPG />} link={`#`} name={"RPG"} />

    </div>
  );
};
