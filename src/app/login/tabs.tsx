"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function LoginTabs() {
    const { open } = useAppKit();
    const { address, isConnected } = useAccount();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const emailRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

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

    if (!mounted) {
        return null; 
    }

    return (
        <Tabs defaultValue="credentials" className="w-full max-w-[450px]">
            <TabsList className="grid w-full grid-cols-2 h-15">
                <TabsTrigger value="credentials">Email & Password</TabsTrigger>
                <TabsTrigger value="wallet">Wallet</TabsTrigger>
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
                        className="w-full h-14 text-lg bg-nexapurple-700 hover:bg-nexapurple-800"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                </form>

                <div className="text-center pt-2">
                    <p className="text-base text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-purple-400 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="wallet" className="space-y-4 mt-6">
                <div className="space-y-4 p-4">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">Login with Wallet</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Connect your wallet to access your NexaWork account
                        </p>
                    </div>

                    {isConnected ? (
                        <div className="space-y-4">
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md flex justify-between items-center">
                                <span className="font-mono text-sm">
                                    {address
                                        ? `${address.slice(0, 6)}...${address.slice(-4)}`
                                        : ""}
                                </span>
                                <span className="text-xs font-semibold">Connected</span>
                            </div>
                            <Button
                                className="bg-nexapurple-700 hover:bg-nexapurple-800 w-full h-14 text-lg"
                                onClick={() => {
                                    //  we need to validate the wallet signature
                                    // and create a session, then redirect
                                    document.cookie =
                                        "auth_token=demo_token; path=/; max-age=86400";
                                    localStorage.setItem("auth_token", "true");
                                    localStorage.setItem("wallet_connected", "true");
                                    localStorage.setItem("user_email", "wallet_user@example.com");
                                    router.push("/dashboard");
                                }}
                            >
                                Login with Connected Wallet
                            </Button>
                        </div>
                    ) : (
                        <div className="flex justify-center py-6">
                            <appkit-button />
                        </div>
                    )}

                    <div className="text-center pt-4">
                        <p className="text-base text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="text-purple-400 hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
}
