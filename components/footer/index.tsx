import React from "react";
import { Input } from "../ui/input";
import Logo from "../nav/Logo";
import { Button } from "../ui/button";
import { Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="z-10 px-20 py-10 bg-gray-300">
      <div className="grid grid-cols-3 gap-6">
        <div className=" space-y-4">
          <Logo />
          <div className=" space-y-6">
            <p className="text-gray-600 italic">
              "Cameroon's agricultural Hub"
            </p>

            <div className="flex gap-2">
              <Button>
                <Instagram />
              </Button>
              <Button>
                <Facebook />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <ul className=" font-medium">
            <li>Blogs</li>
            <li>Contact-us</li>
            <li>Donate</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className=" space-y-4">
          <h6>Sign Up To Our Newsletter</h6>
          <Input placeholder="email" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
