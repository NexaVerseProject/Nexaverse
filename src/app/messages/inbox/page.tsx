// app/messages/inbox/page.tsx
'use client';
import MessageCard from "@/components/MessageCard";

export default function InboxPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Inbox</h2>
      <MessageCard />
    </div>
  );
}
