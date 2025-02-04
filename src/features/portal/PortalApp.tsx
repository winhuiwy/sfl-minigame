import { WalletProvider } from "features/wallet/WalletProvider";
import React from "react";
import { PortalProvider } from "./minigame/lib/PortalProvider";
import { PortalExample } from "./minigame/PortalExample";
import { MinigameBackground } from "./minigame/PortalBackground";

export const PortalApp: React.FC = () => {
  return (
    // WalletProvider - if you need to connect to a players wallet
    <WalletProvider>
      {/* PortalProvider - gives you access to a xstate machine which handles state management */}
      <PortalProvider>
        <MinigameBackground>
          <PortalExample />
        </MinigameBackground>
      </PortalProvider>
    </WalletProvider>
  );
};
