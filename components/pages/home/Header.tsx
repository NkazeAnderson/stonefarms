import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tractor } from "lucide-react";
import Image from "next/image";
import React from "react";
import HeaderLeftGridCol from "./HomeClient";
import Link from "next/link";

function Header() {
  return (
    <div
      className="md:h-[60vh] lg:h-[95vh] relative bg-no-repeat bg-fixed bg-cover grid grid-cols-1 md:grid-cols-2 items-center z-10"
      style={{
        backgroundImage: "url('/earth-cross-section.png')",
      }}
    >

        <div className="md:hidden absolute inset-0 z-40 pointer-events-none">
          <HeaderLeftGridCol />
        </div>

        <div className="relative h-full hidden md:block z-40">
          <HeaderLeftGridCol />
        </div>

        <div className="p-8 lg:p-16 relative z-50">
          <div className="hero-text-box rounded-2xl bg-green-950/80 p-8 md:p-10 text-green-50 space-y-6">
            <Badge className="bg-green-950 font-semibold uppercase">
              StoneFarms
            </Badge>
            <h2>Advancing Sustainable Agriculture in Cameroon</h2>
            <p>
              StoneFarms is dedicated to promoting sustainable agricultural
              practices that enhance food security, protect the environment, and
              support local communities through innovative engineering and
              ecological stewardship.
            </p>
            <Link href={"/blog?category=projects"}>
              <Button className=" mt-7 bg-green-100 text-green-950">
                Our Initiatives
                <Tractor />
              </Button>
            </Link>
          </div>
        </div>
      
    </div>
  );
}

export default Header;
