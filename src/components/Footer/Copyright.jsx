import React from "react";
import { ItemLink } from "./ItemLink";

export const Copyright = () => {
  return (
    <div className="py-8 border-t">
      <p className="text-center">
        &copy; 2023, PixelPlay Games, Inc. All rights reserved. Epic, PixelPlay
        Games, the PixelPlay Games logo, the Unreal Engine logo, Unreal
        Tournament, and the Unreal Tournament logo are trademarks or registered
        trademarks of PixelPlay Games, Inc. in the United States of America and
        elsewhere. Other brands or product names are the trademarks of their
        respective owners.
      </p>
      <div className="flex gap-5 justify-evenly items-center py-5 border-b flex-wrap">
        <ItemLink link={`#`} text={`Terms of Service`} />
        <ItemLink link={`#`} text={`Privacy Policy`} />
        <ItemLink link={`#`} text={`Store Refund Policy`} />
      </div>
    </div>
  );
};
