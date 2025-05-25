"use client";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="border-gray-800"
      aria-label="Dark Mode"
      disabled
    >
      <Moon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Dark Mode</span>
    </Button>
  );
}
