import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Games } from "../components/Games/Games";

export const GamesPage = () => {
  return (
    <Layout>
      <div className="pt-[60px]">
        <Games />
      </div>
    </Layout>
  );
};
