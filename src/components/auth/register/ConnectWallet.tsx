import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConnectWalletProps {
  onComplete: () => void;
}

export function ConnectWallet({ onComplete }: ConnectWalletProps) {
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
            onClick={onComplete}
          >
            Connect Wallet
          </Button>
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
