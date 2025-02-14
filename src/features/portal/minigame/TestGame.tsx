import React from "react";
import silhouette from "/src/assets/bumpkins/silhouette.png";
import { TestGamePhaser } from "./TestGamePhaser";

export const TestGame: React.FC = () => {
  return (
    <div>
      <TestGamePhaser />
      <img src={silhouette} alt="Silhouette" />
    </div>
  );
};
