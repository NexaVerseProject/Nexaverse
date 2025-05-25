"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Wallet } from "lucide-react";
import { useAccount } from "wagmi";
import { useAppKit } from "@reown/appkit/react";
import { NetworkButton } from "@/components/wallet/NetworkButton";

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { open } = useAppKit();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect to dashboard if connected
  useEffect(() => {
    if (mounted && isConnected) {
      const redirectTimer = setTimeout(() => {
        router.push("/dashboard");
      }, 3000);

      return () => clearTimeout(redirectTimer);
    }
  }, [isConnected, mounted, router]);

  if (!mounted) {
    return (
      <div className="container max-w-md py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Connect Your Wallet
            </h1>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-md py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Connect Your Wallet
          </h1>
          <p className="text-muted-foreground">
            Connect your wallet to access the NexaWork platform and start
            earning NexaPoints
          </p>
        </div>

        {isConnected && address ? (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
              <CardTitle className="text-center">Wallet Connected</CardTitle>
              <CardDescription className="text-center">
                Your wallet has been successfully connected to NexaWork
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-3">
                <div className="flex justify-between items-center">
                  <div className="font-mono text-sm">{`${address.slice(
                    0,
                    6
                  )}...${address.slice(-4)}`}</div>
                  <div className="text-sm font-medium text-green-500">
                    Connected
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <NetworkButton />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => router.push("/dashboard")}
              >
                Go to Dashboard
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Connect Wallet</CardTitle>
              <CardDescription>
                Choose your preferred wallet to connect to the NexaWork platform
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <appkit-button />
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground text-center">
                By connecting your wallet, you agree to our Terms of Service and
                Privacy Policy
              </p>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
