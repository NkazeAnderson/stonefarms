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
      className="relative grid grid-cols-1 items-center bg-no-repeat bg-cover pt-28 md:min-h-[60vh] md:bg-fixed md:grid-cols-2 md:pt-36 lg:min-h-[95vh] lg:pt-40 z-10"
      style={{
        backgroundImage: "url('/earth-cross-section.webp')",
      }}
    >
      <div className="md:hidden absolute inset-0 z-40 pointer-events-none">
        <HeaderLeftGridCol />
      </div>

      <div className="relative h-full hidden md:block z-40">
        <HeaderLeftGridCol />
      </div>

      <div className="p-8 relative z-50">
        <div className="hero-text-box rounded-2xl bg-green-950/80 p-8 md:p-10 text-green-50 space-y-6">
          <Badge className="bg-green-950 font-semibold uppercase">
            StoneFarms
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Advancing Sustainable Agriculture in Cameroon
          </h1>
          <p>
            StoneFarms is dedicated to promoting sustainable agricultural
            practices that enhance food security, protect the environment, and
            support local communities through innovative engineering and
            ecological stewardship.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 bg-green-100 text-green-950 hover:bg-green-200"
          >
            <Link href="/blog?category=projects">
              Our Initiatives
              <Tractor />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
