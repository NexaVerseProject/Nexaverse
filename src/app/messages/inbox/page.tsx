"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InboxRedirect() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/messages");
    }, [router]);
    return (
        <div className="flex items-center justify-center min-h-[300px]">
            <p className="text-muted-foreground">Redirecting to messages...</p>
        </div>
    );
}
