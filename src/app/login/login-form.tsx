"use client";

import type React from "react";

import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const connectWallet = searchParams?.get("connect_wallet") === "true";
  const emailRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"credentials" | "wallet">(
    connectWallet ? "wallet" : "credentials"
  );
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("");

  const handleCredentialLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Store email for demo purposes (to determine user type)
      if (emailRef.current) {
        localStorage.setItem("user_email", emailRef.current.value);
      }

      // Set authentication in both cookie and localStorage for redundancy
      document.cookie = "auth_token=demo_token; path=/; max-age=86400";
      localStorage.setItem("auth_token", "true");

      setIsLoading(false);
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  const handleConnectWallet = async (walletType: string) => {
    setWalletConnecting(true);
    setSelectedWallet(walletType);
    setError("");

    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (walletType === "error") {
        throw new Error("Failed to connect wallet");
      }

      setWalletConnected(true);

      // Set authentication in both cookie and localStorage
      document.cookie = "auth_token=demo_token; path=/; max-age=86400";
      localStorage.setItem("auth_token", "true");
      localStorage.setItem("wallet_connected", "true");
      localStorage.setItem("wallet_type", walletType);

      // For demo purposes, set a default email for wallet users
      localStorage.setItem("user_email", "wallet_user@example.com");

      // Wait a moment to show success before redirecting
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err) {
      setError("Failed to connect wallet. Please try again.");
      setWalletConnecting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900 border-gray-800">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          Sign In to NexaWork
        </CardTitle>
        <CardDescription>
          Access your account using your preferred method
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as "credentials" | "wallet")
          }
        >
          <TabsList className="grid w-full grid-cols-2 h-14 text-lg">
            <TabsTrigger value="credentials" className="py-3">
              Email & Password
            </TabsTrigger>
            <TabsTrigger value="wallet" className="py-3">
              Connect Wallet
            </TabsTrigger>
          </TabsList>

          <TabsContent value="credentials" className="space-y-5 mt-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleCredentialLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="h-12 text-base"
                  ref={emailRef}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-base">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-purple-400 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="h-12 text-base"
                />
              </div>
              <div className="flex items-center space-x-2 py-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button
                type="submit"
                className="w-full h-14 text-lg"
                variant="nexapurple"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="text-center pt-2">
              <p className="text-base text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-purple-400 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-5 mt-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {walletConnected ? (
              <div className="space-y-5">
                <div className="flex flex-col items-center justify-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold">Wallet Connected</h3>
                  <p className="text-muted-foreground text-center mt-2">
                    Your wallet has been successfully connected to NexaWork
                  </p>
                  <div className="w-full mt-6 p-4 border border-gray-700 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="font-mono text-base">0x71C...8F3E</div>
                      <div className="text-base font-medium text-green-500">
                        Connected
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-8 h-14 text-lg"
                    variant="nexapurple"
                    onClick={() => router.push("/dashboard")}
                  >
                    Go to Dashboard
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <p className="text-base text-muted-foreground text-center mb-4">
                  Connect your wallet to access your NexaWork account and manage
                  your crypto payments
                </p>

                <div className="space-y-4">
                  <WalletOption
                    name="MetaMask"
                    icon="/placeholder.svg?height=40&width=40"
                    onClick={() => handleConnectWallet("metamask")}
                    connecting={
                      walletConnecting && selectedWallet === "metamask"
                    }
                    disabled={walletConnecting}
                  />
                  <WalletOption
                    name="Coinbase Wallet"
                    icon="/placeholder.svg?height=40&width=40"
                    onClick={() => handleConnectWallet("coinbase")}
                    connecting={
                      walletConnecting && selectedWallet === "coinbase"
                    }
                    disabled={walletConnecting}
                  />
                  <WalletOption
                    name="WalletConnect"
                    icon="/placeholder.svg?height=40&width=40"
                    onClick={() => handleConnectWallet("walletconnect")}
                    connecting={
                      walletConnecting && selectedWallet === "walletconnect"
                    }
                    disabled={walletConnecting}
                  />
                  <WalletOption
                    name="Trust Wallet"
                    icon="/placeholder.svg?height=40&width=40"
                    onClick={() => handleConnectWallet("trust")}
                    connecting={walletConnecting && selectedWallet === "trust"}
                    disabled={walletConnecting}
                  />
                </div>

                <div className="text-center mt-6">
                  <p className="text-base text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                      href="/register"
                      className="text-purple-400 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

interface WalletOptionProps {
  name: string;
  icon: string;
  onClick: () => void;
  connecting: boolean;
  disabled: boolean;
}

function WalletOption({
  name,
  icon,
  onClick,
  connecting,
  disabled,
}: WalletOptionProps) {
  return (
    <Button
      variant="outline"
      className="w-full justify-between h-auto py-5 px-5 text-base border-gray-700"
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex items-center">
        <img
          src={icon || "/placeholder.svg"}
          alt={name}
          className="w-7 h-7 mr-4"
        />
        <span className="text-base">{name}</span>
      </div>
      {connecting ? (
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
      ) : (
        <Wallet className="h-6 w-6" />
      )}
    </Button>
  );
}
