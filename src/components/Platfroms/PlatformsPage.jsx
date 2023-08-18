import React from "react";
import { ContextPlatformsProvider } from "../../Context/ContextPlatforms/ContextPlatforms";
import { Platfroms } from "./Platfroms";

export const PlatformsPage = () => {
  return (
    <ContextPlatformsProvider>
      <Platfroms />
    </ContextPlatformsProvider>
  );
};
