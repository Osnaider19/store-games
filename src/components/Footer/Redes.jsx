import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { ItemRedes } from "./ItemRedes";
export const Redes = () => {
  return (
    <div className="flex flex-wrap items-center text-3xl gap-5 justify-center py-3">
      <ItemRedes icon={<BsFacebook />} link={`#`} />
      <ItemRedes icon={<BsInstagram />} link={`https://www.instagram.com/osnaider_m19/`} />
      <ItemRedes icon={<BsTwitter />} link={`#`} />
      <ItemRedes icon={<BsGithub />} link={`https://github.com/Osnaider19`} />
    </div>
  );
};
