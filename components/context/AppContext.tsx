"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

const AppContext = createContext({
  isMobileNavOpen: false,
  toggleMobileNav: () => {},
  closeMobileNav: () => {},
});

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw "Wrap in AppContext required";
  }
  return ctx;
}

function AppContextProvider(props: PropsWithChildren) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = useCallback(
    () => setIsMobileNavOpen((prev) => !prev),
    [],
  );
  const closeMobileNav = useCallback(() => setIsMobileNavOpen(false), []);
  return (
    <AppContext.Provider
      value={{ isMobileNavOpen, toggleMobileNav, closeMobileNav }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
