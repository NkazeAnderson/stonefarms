import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { Menu, Nfc } from "lucide-react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import NavLinkClient, { MobileNav } from "./NavLinkClient";
import DonateButton from "./DonateButton";
import NavDropdown from "./NavDropdown";

export type NavLink = {
  text: string;
  link: Url;
  children?: { text: string; link: string }[];
};

export const naveLinks: NavLink[] = [
  { text: "home", link: "/" },
  { text: "about us", link: "/about-us" },
  {
    text: "blogs",
    link: "/blog",
    children: [
      { text: "Blogs", link: "/blog" },
      { text: "Projects", link: "/blog?category=projects" },
      { text: "Stories & Impact", link: "/stories" },
    ],
  },
  { text: "contact us", link: "/contact-us" },
  { text: "gallery", link: "/gallery" },
];

function NavBar() {
  return (
    <nav className=" flex justify-between items-center  p-2 border-accent bg-green-950 border rounded-4xl">
      <Logo />
      <ul className=" lg:flex lg:gap-8 gap-4 text-lg font-medium hidden">
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
            <Link href={item.link} key={item.text}>
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
      <div className=" hidden lg:block">
        <DonateButton />
      </div>
      <MobileNav />
    </nav>
  );
}

export default NavBar;
