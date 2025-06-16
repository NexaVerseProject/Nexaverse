'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useAccount, useChainId, useDisconnect } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';

export function useWallet() {
    const { address, isConnected } = useAccount();
    const chainId = useChainId();
    const { open } = useAppKit();
    const { disconnect } = useDisconnect();
    const [mounted, setMounted] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const displayAddress = useMemo(() => {
        return isConnected && address
            ? `${address.slice(0, 6)}...${address.slice(-4)}`
            : '';
    }, [isConnected, address])
    const openConnectModal = useCallback(() => {
        setIsConnecting(true);
        open().finally(() => {
            setIsConnecting(false);
        });
    }, [open]);
    const disconnectWallet = useCallback(() => {
        disconnect();
    }, [disconnect]);

    return {
        address,
        displayAddress,
        isConnected: mounted && isConnected,
        isConnecting,
        openConnectModal,
        disconnectWallet,
        mounted
    };
} 