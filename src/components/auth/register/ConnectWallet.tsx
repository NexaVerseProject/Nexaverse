import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

interface ConnectWalletProps {
  onComplete: () => void;
}

export function ConnectWallet({ onComplete }: ConnectWalletProps) {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // If wallet is already connected when component mounts, automatically proceed
  useEffect(() => {
    if (mounted && isConnected) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [mounted, isConnected, onComplete]);

  if (!mounted) {
    return (
      <div className="space-y-4">
        <div className="rounded-lg border p-4 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-nexapurple-100 dark:bg-nexapurple-900/30 p-3 rounded-full">
              <Wallet className="h-6 w-6 text-nexapurple-700" />
            </div>
            <div>
              <h3 className="font-medium">Connect Your Wallet</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Connect your wallet to receive payments and earn NexaPoints
              </p>
            </div>
            <Button
              className="bg-nexapurple-700 hover:bg-nexapurple-800"
              disabled={true}
            >
              Loading...
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-nexapurple-100 dark:bg-nexapurple-900/30 p-3 rounded-full">
            <Wallet className="h-6 w-6 text-nexapurple-700" />
          </div>
          <div>
            <h3 className="font-medium">Connect Your Wallet</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Connect your wallet to receive payments and earn NexaPoints
            </p>
          </div>
          {isConnected ? (
            <div className="space-y-2 w-full">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md flex justify-between items-center">
                <span className="font-mono text-sm">
                  {address
                    ? `${address.slice(0, 6)}...${address.slice(-4)}`
                    : ""}
                </span>
                <span className="text-xs font-semibold">Connected</span>
              </div>
              <Button
                className="bg-nexapurple-700 hover:bg-nexapurple-800 w-full"
                onClick={onComplete}
              >
                Continue
              </Button>
            </div>
          ) : (
            <appkit-button />
          )}
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          You can also connect your wallet later from your dashboard
        </p>
        <Button
          variant="link"
          className="text-nexapurple-700 hover:underline text-sm p-0 h-auto"
          onClick={onComplete}
        >
          Skip for now
        </Button>
      </div>
    </div>
  );
}
