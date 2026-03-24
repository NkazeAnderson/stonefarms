import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";

function TeamMemberCard() {
  return (
    <div className="space-y-4">
      <div className=" p-1 border rounded-md bg-primary-200 shadow-xl border-primary-700 space-y-4">
        <div className=" aspect-square relative">
          <Image
            className=" rounded-full"
            src={"/faceHolder.png"}
            alt="User profile picture"
            fill
          />
        </div>
        <div>
          <p className=" font-semibold text-center">John Doe</p>
          <p className="text-gray-600 text-center">CEO</p>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <Button size={"lg"} className=" aspect-square rounded-full bg-gray-900">
          <Linkedin />
        </Button>

        <Button size={"lg"} className=" aspect-square rounded-full bg-gray-900">
          <Facebook />
        </Button>
        <Button size={"lg"} className=" aspect-square rounded-full bg-gray-900">
          <Twitter />
        </Button>
      </div>
    </div>
  );
}

export default TeamMemberCard;
