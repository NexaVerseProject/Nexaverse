"use client";

import { Button } from "@/components/ui/button";
import { useAppKit } from "@reown/appkit/react";
import { useAccount, useChainId } from "wagmi";
import { Globe, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { networks } from "@/config/wallet";

export function NetworkButton() {
  const { open } = useAppKit();
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNetworkClick = () => {
    setIsLoading(true);
    open({ view: "Networks" }).finally(() => {
      setIsLoading(false);
    });
  };

  if (!mounted || !isConnected) {
    return null;
  }
  const currentNetwork = networks.find((network) => network.id === chainId);
  const networkName = currentNetwork?.name || "Unknown Network";
  const shortNetworkName = networkName.split(" ")[0]; // Just take the first word

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-1 px-2 text-blue-500 border border-blue-500/20 hover:bg-blue-500/10"
      onClick={handleNetworkClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Globe className="h-4 w-4" />
      )}
      <span className="text-xs">{shortNetworkName}</span>
    </Button>
  );
}
export function NetworkButtonWebComponent() {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isConnected) {
    return null;
  }

  return <appkit-network-button />;
}
