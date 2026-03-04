import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { Nfc } from "lucide-react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import NavLinkClient from "./NavLinkClient";

export type NavLink = {
  text: string;
  link: Url;
};

const naveLinks: NavLink[] = [
  { text: "home", link: "/" },
  { text: "about us", link: "/about-us" },
  { text: "contact us", link: "/contact-us" },
];

function NavBar() {
  return (
    <nav className=" flex justify-between items-center  p-2 border-accent bg-green-950 border rounded-4xl">
      <Logo />
      <ul className=" flex gap-8 text-lg font-medium">
        {naveLinks.map((item) => {
          return (
            <Link href={"/"} key={item.text}>
              <li className="hover:text-green-700 group block text-green-50">
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
      <Button
        className="bg-accent text-white rounded-4xl hover:cursor-pointer hover:scale-105 ease-in-out"
        size={"lg"}
      >
        Donate
        <Nfc />
      </Button>
    </nav>
  );
}

export default NavBar;
