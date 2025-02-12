import React from "react";
import { PortalProvider } from "./minigame/lib/PortalProvider";
import { MinigameBackground } from "./minigame/PortalBackground";
import { TestGame } from "./minigame/TestGame";

export const PortalApp: React.FC = () => {
  return (
    <PortalProvider>
      <MinigameBackground>
        <TestGame />
      </MinigameBackground>
    </PortalProvider>
  );
};
