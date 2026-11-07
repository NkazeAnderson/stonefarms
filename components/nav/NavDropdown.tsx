"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
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
  const { toggleMobileNav } = useAppContext();

  if (mobile) {
    return (
      <li
        className="list-none text-green-50 py-2"
        onClick={(e) => e.stopPropagation()}
      >
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
                  onClick={toggleMobileNav}
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
    <li className="relative group list-none text-green-50">
      <button
        type="button"
        className="flex items-center gap-1 capitalize leading-4 hover:text-green-700"
        aria-haspopup="menu"
      >
        {text}
        <ChevronDown
          size={16}
          className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-48 list-none rounded-2xl border border-accent bg-green-950 p-2 shadow-lg">
          {items.map((c) => (
            <li key={c.text} className="list-none">
              <Link
                href={c.link}
                className="block rounded-xl px-4 py-2 whitespace-nowrap hover:bg-green-900 hover:text-green-400"
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
