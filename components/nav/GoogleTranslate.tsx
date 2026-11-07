"use client";

import { useEffect } from "react";
import "./GoogleTranslate.css";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => unknown;
      };
    };
  }
}

const SCRIPT_ID = "google-translate-script";
export const GOOGLE_TRANSLATE_ELEMENT_ID = "google_translate_element";

// Hidden engine: the default layout renders a native select.goog-te-combo, which LanguageSwitcher drives.
export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    window.googleTranslateElementInit = () => {
      const { TranslateElement } = window.google!.translate;
      new TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,de,es,pt,ar",
          autoDisplay: false,
        },
        GOOGLE_TRANSLATE_ELEMENT_ID,
      );
    };

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }, []);

  return <div id={GOOGLE_TRANSLATE_ELEMENT_ID} className="hidden" />;
}
