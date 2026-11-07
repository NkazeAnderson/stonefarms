import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import NavLinkClient from "./NavLinkClient";
import DonateButton from "./DonateButton";
import NavDropdown from "./NavDropdown";
import GoogleTranslate from "./GoogleTranslate";
import LanguageSwitcher from "./LanguageSwitcher";
import { MobileNavButton } from "./MobileNav";
import { naveLinks } from "./links";

function NavBar() {
  return (
    <nav className=" flex justify-between items-center  p-2 border-accent bg-green-950 border rounded-4xl">
      <Logo />
      <ul className="hidden gap-4 text-lg font-medium lg:flex lg:gap-8">
        {naveLinks.map((item) => {
          if (item.children)
            return (
              <NavDropdown
                key={item.text}
                text={item.text}
                items={item.children}
              />
            );
          return (
            <li
              key={item.text}
              className="hover:text-accent group block text-green-50 list-none"
            >
              <Link href={item.link} className="block">
                <NavLinkClient link={item.link}>
                  <div className=" leading-4 capitalize">
                    {item.text}
                    <div className="h-0.5 w-full">
                      <div className="h-full w-0 bg-accent transition-all duration-300 group-hover:w-full"></div>
                    </div>
                  </div>
                </NavLinkClient>
              </Link>
            </li>
          );
        })}
      </ul>
      <GoogleTranslate />
      <LanguageSwitcher className="mx-2 hidden lg:block" />
      <div className=" hidden lg:block">
        <DonateButton />
      </div>
      <MobileNavButton />
    </nav>
  );
}

export default NavBar;
