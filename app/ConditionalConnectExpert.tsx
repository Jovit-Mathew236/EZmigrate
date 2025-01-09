"use client";

import { usePathname } from "next/navigation";
import ConnectExpertSection from "@/components/madeups/Home/modules/connect-expert-section";

export function ConditionalConnectExpert() {
  const pathname = usePathname();
  if (pathname === "/careers" || pathname === "/contact") return null;
  return <ConnectExpertSection />;
}
