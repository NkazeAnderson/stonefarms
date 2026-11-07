"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { ChevronDown } from "lucide-react";
import { DE, ES, FR, GB, PT, SA } from "country-flag-icons/react/3x2";

type Flag = ComponentType<{ className?: string; title?: string }>;

const LANGUAGES: { code: string; label: string; Flag: Flag }[] = [
  { code: "en", label: "English", Flag: GB },
  { code: "fr", label: "Français", Flag: FR },
  { code: "de", label: "Deutsch", Flag: DE },
  { code: "es", label: "Español", Flag: ES },
  { code: "pt", label: "Português", Flag: PT },
  { code: "ar", label: "العربية", Flag: SA },
];

// Google stores the active language in the "googtrans" cookie, e.g. "/en/fr".
function readCurrentLanguage(): string {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "en";
}

type LanguageSwitcherProps = {
  placement?: "up" | "down";
  className?: string;
};

export default function LanguageSwitcher({
  placement = "down",
  className = "",
}: LanguageSwitcherProps) {
  const [current, setCurrent] = useState("en");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(readCurrentLanguage());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selected = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  function selectLanguage(code: string) {
    const combo = document.querySelector<HTMLSelectElement>(
      "select.goog-te-combo",
    );
    if (!combo) return;
    // Google's select uses "" as the placeholder before a translation, and
    // "en" as the English option once a translation is active.
    const hasOption = Array.from(combo.options).some((o) => o.value === code);
    combo.value = hasOption ? code : "";
    combo.dispatchEvent(new Event("change"));
    setCurrent(code);
    setOpen(false);
  }

  return (
    <div ref={rootRef} translate="no" className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex cursor-pointer items-center gap-2 rounded-full border border-green-50/40 px-3 py-1 text-sm text-green-50"
      >
        <selected.Flag className="h-4 w-6 rounded-sm" />
        <span>{selected.label}</span>
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute left-1/2 z-70 min-w-40 -translate-x-1/2 rounded-lg border border-green-50/20 bg-green-950 p-1 shadow-lg ${
            placement === "up" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          {LANGUAGES.map(({ code, label, Flag }) => (
            <li key={code} role="option" aria-selected={code === current}>
              <button
                type="button"
                onClick={() => selectLanguage(code)}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-green-50 hover:bg-green-50/10 ${
                  code === current ? "bg-green-50/10" : ""
                }`}
              >
                <Flag className="h-4 w-6 rounded-sm" />
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
