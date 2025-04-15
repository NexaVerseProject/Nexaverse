"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "auth_token=; path=/; max-age=0";
        router.push("/");
        window.location.reload();
    };

    return (
        <Button
            variant="ghost"
            className="w-full flex justify-center items-center gap-2 py-3 rounded-none"
            onClick={handleLogout}
        >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
        </Button>
    );
}
