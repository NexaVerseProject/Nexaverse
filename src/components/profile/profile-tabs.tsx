"use client"

import type React from "react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProfileTabsProps {
  defaultTab?: string
  children: React.ReactNode
  onTabChange?: (value: string) => void
  className?: string
}

export function ProfileTabs({ defaultTab = "basic", children, onTabChange, className }: ProfileTabsProps) {
  return (
    <Tabs defaultValue={defaultTab} onValueChange={onTabChange} className={`w-full ${className || ""}`}>
      <TabsList className="w-full grid grid-cols-4 mb-6 h-15">
        <TabsTrigger value="basic">Basic Info</TabsTrigger>
        <TabsTrigger value="photo">Profile Photo</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
        <TabsTrigger value="company">Company Info</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}
