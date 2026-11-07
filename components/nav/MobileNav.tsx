"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useAppContext } from "../context/AppContext";
import DonateButton from "./DonateButton";
import NavDropdown from "./NavDropdown";
import NavLinkClient from "./NavLinkClient";
import { naveLinks } from "./links";

export function MobileNavButton() {
  const { isMobileNavOpen, toggleMobileNav } = useAppContext();
  return (
    <Button
      className="lg:hidden"
      aria-label="Toggle menu"
      aria-expanded={isMobileNavOpen}
      onClick={toggleMobileNav}
    >
      <Menu />
    </Button>
  );
}

export function MobileNavOverlay() {
  const { isMobileNavOpen, closeMobileNav } = useAppContext();

  useEffect(() => {
    if (!isMobileNavOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileNav();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileNavOpen, closeMobileNav]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-primary-500/80 transition-all duration-300 lg:hidden ${
        isMobileNavOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeMobileNav();
      }}
    >
      <nav
        aria-label="Mobile"
        className={`ml-[20%] flex h-full flex-col justify-between gap-10 overflow-y-auto rounded-l-md bg-primary-800 px-6 py-6 text-lg font-medium transition-transform duration-300 ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <Button
            size="icon"
            variant="ghost"
            aria-label="Close menu"
            className="text-green-50 hover:bg-primary-700 hover:text-green-50"
            onClick={closeMobileNav}
          >
            <X />
          </Button>
        </div>

        <ul className="space-y-2">
          {naveLinks.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.text}
                text={item.text}
                items={item.children}
                mobile
              />
            ) : (
              <li key={item.text} className="list-none py-2 text-green-50">
                <Link
                  href={item.link}
                  className="block capitalize hover:text-accent"
                  onClick={closeMobileNav}
                >
                  <NavLinkClient link={item.link}>{item.text}</NavLinkClient>
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="self-center" onClick={closeMobileNav}>
          <DonateButton />
        </div>
      </nav>
    </div>
  );
}
