"use client";

import { Button } from "@/components/ui/button";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { Wallet, Loader2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

// Add window.ethereum type definition
declare global {
  interface Window {
    ethereum?: Record<string, unknown>;
  }
}

export function ConnectButton() {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug log when component mounts
  useEffect(() => {
    if (mounted) {
      console.log("ConnectButton mounted, AppKit available:", !!open);
      console.log("Initial wallet connection state:", isConnected);
    }
  }, [mounted, open, isConnected]);

  const handleConnect = async () => {
    setIsLoading(true);
    setError(null);

    try {
      console.log("ConnectButton: Attempting to open wallet modal");
      await open();
      console.log("ConnectButton: Wallet modal opened successfully");
    } catch (err) {
      console.error("ConnectButton: Error opening wallet modal:", err);
      setError(err instanceof Error ? err.message : String(err));

      // Fallback for MetaMask
      try {
        if (window.ethereum) {
          console.log("Attempting direct MetaMask connection");
          await (window.ethereum as any).request({
            method: "eth_requestAccounts",
          });
        }
      } catch (fallbackErr) {
        console.error("Fallback connection failed:", fallbackErr);
      }
    } finally {
      // Always set loading to false when done
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="gap-1 px-2">
        <Wallet className="h-4 w-4" />
        <span className="text-xs">Wallet</span>
      </Button>
    );
  }

  if (isConnected && address) {
    // Create a shortened version of the address for display
    const shortenedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

    return (
      <Button
        variant="ghost"
        size="sm"
        className="gap-1 px-2 text-green-500 border border-green-500/20 hover:bg-green-500/10"
        onClick={handleConnect}
      >
        <Wallet className="h-4 w-4" />
        <span className="text-xs">{shortenedAddress}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-1 px-2"
      onClick={handleConnect}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : error ? (
        <AlertCircle className="h-4 w-4 text-red-500" />
      ) : (
        <Wallet className="h-4 w-4" />
      )}
      <span className="text-xs">
        {isLoading ? "Connecting..." : error ? "Retry" : "Connect"}
      </span>
    </Button>
  );
}

// Web component version of the connect button that might work better
export function ConnectButtonWebComponent() {
  // Use direct HTML to ensure proper rendering
  return (
    <div className="appkit-button-wrapper">
      <appkit-button></appkit-button>
    </div>
  );
}
