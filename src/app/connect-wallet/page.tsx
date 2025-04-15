"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, Wallet } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ConnectWallet() {
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConnect = (walletType: string) => {
    setConnecting(true)
    setError(null)

    // Simulate wallet connection
    setTimeout(() => {
      if (walletType === "error") {
        setError("Failed to connect to wallet. Please try again.")
        setConnecting(false)
        return
      }

      setConnected(true)
      setConnecting(false)
    }, 1500)
  }

  return (
    <div className="container max-w-md py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Connect Your Wallet</h1>
          <p className="text-muted-foreground">
            Connect your wallet to access the NexaWork platform and start earning NexaPoints
          </p>
        </div>

        {connected ? (
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
                  <div className="font-mono text-sm">0x71C...8F3E</div>
                  <div className="text-sm font-medium text-green-500">Connected</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => (window.location.href = "/dashboard")}
              >
                Go to Dashboard
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Select Wallet</CardTitle>
                <CardDescription>Choose your preferred wallet to connect to the NexaWork platform</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="popular">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                    <TabsTrigger value="all">All Wallets</TabsTrigger>
                  </TabsList>
                  <TabsContent value="popular" className="space-y-4 mt-4">
                    <WalletOption
                      name="MetaMask"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("metamask")}
                      connecting={connecting}
                    />
                    <WalletOption
                      name="Coinbase Wallet"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("coinbase")}
                      connecting={connecting}
                    />
                    <WalletOption
                      name="WalletConnect"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("walletconnect")}
                      connecting={connecting}
                    />
                  </TabsContent>
                  <TabsContent value="all" className="space-y-4 mt-4">
                    <WalletOption
                      name="MetaMask"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("metamask")}
                      connecting={connecting}
                    />
                    <WalletOption
                      name="Coinbase Wallet"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("coinbase")}
                      connecting={connecting}
                    />
                    <WalletOption
                      name="WalletConnect"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("walletconnect")}
                      connecting={connecting}
                    />
                    <WalletOption
                      name="Trust Wallet"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("trust")}
                      connecting={connecting}
                    />
                    <WalletOption
                      name="Phantom"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("phantom")}
                      connecting={connecting}
                    />
                    <WalletOption
                      name="Error Wallet (Demo)"
                      icon="/placeholder.svg?height=40&width=40"
                      onClick={() => handleConnect("error")}
                      connecting={connecting}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground text-center">
                  By connecting your wallet, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardFooter>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}

interface WalletOptionProps {
  name: string
  icon: string
  onClick: () => void
  connecting: boolean
}

function WalletOption({ name, icon, onClick, connecting }: WalletOptionProps) {
  return (
    <Button variant="outline" className="w-full justify-between h-auto py-3" onClick={onClick} disabled={connecting}>
      <div className="flex items-center">
        <img src={icon || "/placeholder.svg"} alt={name} className="w-6 h-6 mr-3" />
        <span>{name}</span>
      </div>
      {connecting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
      ) : (
        <Wallet className="h-5 w-5" />
      )}
    </Button>
  )
}
