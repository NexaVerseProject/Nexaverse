import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "About Us | NexaWork",
  description:
    "Learn about NexaWork and our mission to empower blockchain talent in Africa",
};

export default function AboutPage() {
  // Since this is a server component, we need to use the client component
  // to handle hiding the footer
  return <AboutPageClient />;
}
