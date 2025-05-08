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

// Create the AppKit modal
createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: networks as any,
    metadata: {
        name: 'NexaWork',
        description: 'NexaWork - Blockchain Freelance Platform',
        url: 'https://nexawork.io',
        icons: ['https://nexawork.io/logo.png']
    },
    features: {
        analytics: false,
        email: false,
        socials: ['google', 'github'],
        emailShowWallets: true
    },
    themeMode: 'dark'
});

export const wagmiConfig = wagmiAdapter.wagmiConfig; 
