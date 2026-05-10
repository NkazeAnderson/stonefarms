"use client";

import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { naveLinks } from ".";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import DonateButton from "./DonateButton";

function NavLinkClient({ link, children }: PropsWithChildren<{ link: Url }>) {
  const path = usePathname();
  const isActive = path === link;
  return <div className={` ${isActive && "text-green-600"}`}>{children}</div>;
}

export function MobileNav() {
  const {isMobileNavOpen, toggleMobileNav} = useAppContext()
  return <>
     <Button className=" lg:hidden" onClick={toggleMobileNav}>
        <Menu />
      </Button>
   <div className={`pl-[20%] md:hidden fixed inset-0 bg-primary-500/80 z-[60] h-screen w-screen ${!isMobileNavOpen && "left-full"}`} onClick={toggleMobileNav}>
     <div className="  py-10 h-full gap-10 text-lg font-medium flex flex-col justify-between bg-primary-800 rounded-l-md">

      <ul >
        {naveLinks.map((item) => {
          return (
            <Link href={item.link} key={item.text}>
              <li className="hover:text-green-700 group block text-green-50 py-2">
                <NavLinkClient link={item.link}>
                  <div className=" leading-4 capitalize">
                    {item.text}
                    <div className="h-0.5 w-full">
                      <div
                        className={`h-full w-0 bg-green-500 group-hover:w-full transition-all duration-300"`}
                      ></div>
                    </div>
                  </div>
                </NavLinkClient>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="self-center">
        <DonateButton />
      </div>
     </div>
    </div>
  </>
}


export default NavLinkClient;
