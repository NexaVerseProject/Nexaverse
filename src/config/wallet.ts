import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, polygon, arbitrum, optimism, base, bsc } from '@reown/appkit/networks';
import { cookieStorage, createStorage } from 'wagmi';

// Get projectId from Reown Cloud (https://cloud.reown.com)
export const projectId = process.env.NEXT_PUBLIC_WALLET_PROJECT_ID || '';

export const networks = [
    mainnet,
    polygon,
    optimism,
    base,
    arbitrum,
    bsc
];

// Set up the Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }) as any,
    ssr: true,
    networks,
    projectId
});

// Create the AppKit modal (client-only, single initialization)
if (typeof window !== 'undefined') {
    const globalScope = window as unknown as { __APPKIT_INITIALIZED__?: boolean };
    if (!globalScope.__APPKIT_INITIALIZED__) {
        const origin = window.location.origin;
        createAppKit({
            adapters: [wagmiAdapter],
            projectId,
            networks: networks as any,
            metadata: {
                name: 'NexaWork',
                description: 'NexaWork - Blockchain Freelance Platform',
                url: origin,
                icons: [`${origin}/favicon.ico`]
            },
            features: {
                analytics: false,
                email: false,
                socials: ['google', 'github'],
                emailShowWallets: true
            },
            themeMode: 'dark'
        });
        globalScope.__APPKIT_INITIALIZED__ = true;
    }
}

export const wagmiConfig = wagmiAdapter.wagmiConfig; 
