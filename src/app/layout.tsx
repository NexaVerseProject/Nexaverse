import type React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { BackgroundBeams } from "@/components/ui/background-beams";
const AppKitProvider = dynamic(() => import("@/components/providers/AppKitProvider").then((mod) => mod.AppKitProvider),
  { ssr: false }
);

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "NexaWork | Blockchain Freelance Platform",
  description:
    "Decentralized freelance platform powered by blockchain technology",
};

export default function RootLayout({children}: {children: React.ReactNode;}) {
  const cookies = headers().get("cookie");

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans text-base bg-background text-foreground`} >
        <ThemeProvider>
          <BackgroundBeams />
          <AppKitProvider cookies={cookies}>
            <div className="flex min-h-screen flex-col w-full">
              <Navbar />
              <main className="flex-1 w-full">{children}</main>
              <LayoutWrapper />
            </div>
          </AppKitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
