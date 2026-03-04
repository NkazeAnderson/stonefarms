"use client";

import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

function NavLinkClient({ link, children }: PropsWithChildren<{ link: Url }>) {
  const path = usePathname();
  const isActive = path === link;
  return <div className={` ${isActive && "text-green-600"}`}>{children}</div>;
}

export default NavLinkClient;
