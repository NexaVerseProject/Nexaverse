"use client";

import React, { ReactNode, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { cookieToInitialState } from "wagmi";
import { wagmiConfig, wagmiAdapter } from "@/config/wallet";

// Create QueryClient outside of component to prevent recreation on each render
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
      retry: 2,
      refetchOnWindowFocus: false, 
    },
  },
});

interface AppKitProviderProps {
  children: ReactNode;
  cookies?: string | null;
}
const AppKitProvider = React.memo(({ children, cookies }: AppKitProviderProps) => {
    const initialState = useMemo(() => {
      return cookies
        ? cookieToInitialState(wagmiAdapter.wagmiConfig, cookies)
        : undefined;
    }, [cookies]);

    return (
      <WagmiProvider config={wagmiConfig} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    );
  }
);

AppKitProvider.displayName = "AppKitProvider";

export { AppKitProvider };
