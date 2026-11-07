"use client";

import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

function NavLinkClient({
  link,
  children,
}: PropsWithChildren<{ link: string }>) {
  const path = usePathname();
  const isActive = path === link;
  return <div className={isActive ? "text-accent" : undefined}>{children}</div>;
}

export default NavLinkClient;
