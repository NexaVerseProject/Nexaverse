import type React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { LayoutWrapper } from "@/components/LayoutWrapper";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "NexaWork | Blockchain Freelance Platform",
  description:
    "Decentralized freelance platform powered by blockchain technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans text-base`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col w-full">
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <LayoutWrapper />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
