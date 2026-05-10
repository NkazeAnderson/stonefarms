import React from "react";
import { Input } from "../ui/input";
import Logo from "../nav/Logo";
import { Button } from "../ui/button";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="z-10 px-4 md:px-20 py-10 bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" space-y-4">
          <Logo />
          <div className=" space-y-6">
            <p className="text-gray-600 italic">
              "Advancing Sustainable Agriculture in Cameroon"
            </p>

            <div className="flex gap-2">
              
             <Link href="https://www.facebook.com/people/Stone-Farms-Ltd-Cameroon/100083811033749/?_rdr">
                <Button className=" p-4 aspect-square bg-blue-700">
                  <Facebook />
                </Button></Link>
            </div>
          </div>
        </div>
        <div>
          <ul className="font-medium space-y-2">
            <li><Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact-us</Link></li>
            <li><Link href="/donate" className="hover:text-primary transition-colors">Donate</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy policy</Link></li>
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
