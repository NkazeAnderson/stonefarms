import React from "react";
import { Input } from "../ui/input";
import Logo from "../nav/Logo";
import { Button } from "../ui/button";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="z-10 px-4 md:px-20 py-12 bg-green-950 text-green-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" space-y-4">
          <Logo color="white" />
          <div className=" space-y-6">
            <p className="text-green-100 italic">
              Socio-economic and Environmental Sustainability
            </p>

            <div className="flex gap-2">
              <Button
                asChild
                size="icon-lg"
                className="bg-blue-700 hover:bg-blue-600"
              >
                <Link
                  href="https://www.facebook.com/people/Stone-Farms-Ltd-Cameroon/100083811033749/?_rdr"
                  aria-label="Facebook"
                >
                  <Facebook />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <ul className="font-medium space-y-2 list-none">
            <li>
              <Link
                href="/blog"
                className="hover:text-accent transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-accent transition-colors"
              >
                Contact-us
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className="hover:text-accent transition-colors"
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-accent transition-colors"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className=" space-y-4">
          <h6 className="font-semibold">Sign up to our newsletter</h6>
          <form
            action="mailto:info@stonefarms.org"
            method="get"
            className="flex gap-2"
          >
            <input
              type="hidden"
              name="subject"
              value="Newsletter subscription"
            />
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              name="body"
              placeholder="Your email"
              required
              className="bg-green-50 text-green-950"
            />
            <Button
              type="submit"
              className="bg-accent text-green-950 hover:bg-accent/90"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-10 border-t border-green-800 pt-6 text-sm text-green-200">
        © {new Date().getFullYear()} StoneFarms Ltd Cameroon. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
