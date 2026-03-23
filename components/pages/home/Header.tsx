import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tractor } from "lucide-react";
import Image from "next/image";
import React from "react";
import HeaderLeftGridCol from "./HomeClient";

function Header() {
  return (
    <div
      className="h-[95vh] relative bg-no-repeat bg-fixed bg-cover "
      style={{
        backgroundImage: "url('/earth-cross-section.png')",
      }}
    >
      <div className="h-full w-full grid grid-cols-2 items-center z-0 ">
        <div className="relative h-full ">
          <HeaderLeftGridCol />
        </div>
        <div className=" p-16 ">
          <div className="a  rounded-2xl bg-green-950/80 p-4 text-green-50 space-y-2">
            <Badge className="bg-green-950 font-semibold uppercase">
              StoneFarms
            </Badge>
            <h2>The Productive Agricultural hub</h2>
            <p>
              We are Cameroon's most skilled organisation of agricultural
              engineers applying sustainable techniques to farm ready to market
              crops while maintaining the ecosystem
            </p>
            <Button className=" mt-7 bg-green-100 text-green-950">
              Our Projects
              <Tractor />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
