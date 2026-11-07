"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import React, { useId, useState } from "react";
import { useAppContext } from "../context/AppContext";

type Child = { text: string; link: string };

// Desktop: opens on hover/focus. Mobile: opens on click.
export default function NavDropdown({
  text,
  items,
  mobile = false,
}: {
  text: string;
  items: Child[];
  mobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const { closeMobileNav } = useAppContext();
  const menuId = useId();

  if (mobile) {
    return (
      <li className="list-none text-green-50 py-2">
        <button
          type="button"
          className="flex items-center gap-1 capitalize"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {text}
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <ul className="mt-2 ml-4 flex list-none flex-col gap-2 p-0 text-base">
            {items.map((c) => (
              <li key={c.text} className="list-none">
                <Link
                  href={c.link}
                  className="block hover:text-green-500"
                  onClick={closeMobileNav}
                >
                  {c.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li
      className="group relative list-none text-green-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        className="flex items-center gap-1 capitalize leading-4 transition-colors hover:text-accent"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(true)}
      >
        {text}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={menuId}
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-200 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="min-w-48 list-none rounded-2xl border border-accent bg-green-950 p-2 shadow-lg">
          {items.map((c) => (
            <li key={c.text} className="list-none">
              <Link
                href={c.link}
                onClick={() => setOpen(false)}
                className="block whitespace-nowrap rounded-xl px-4 py-2 hover:bg-green-900 hover:text-green-400"
              >
                {c.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
