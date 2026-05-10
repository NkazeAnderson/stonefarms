import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
export type TeamMemberT = {
  profilePic:string,
  name:string,
  title:string,
  linkedIn?:string,
  twitter?:string,
  facebook?:string,
}

function TeamMemberCard({member}:{member:TeamMemberT}) {
  return (
    <div className="space-y-4">
      <div className=" p-1 border rounded-md bg-primary-200 shadow-xl border-primary-700 space-y-4">
        <div className=" aspect-square relative">
          <Image
            className=" rounded-full"
            src={member.profilePic}
            alt="User profile picture"
            fill
          />
        </div>
        <div>
          <p className=" font-semibold text-center">{member.name}</p>
          <p className="text-gray-600 text-center">{member.title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center">
        {
          !!member.linkedIn &&
          <Link href={member.linkedIn} className="hover:cursor-pointer">
        <Button size={"lg"} className=" aspect-square rounded-full bg-gray-900">
          <Linkedin />
        </Button>
          </Link>
        }
        {
            !!member.facebook &&
                <Link href={member.facebook}>

        <Button size={"lg"} className=" aspect-square rounded-full bg-gray-900">
          <Facebook />
        </Button>
                </Link>
        }
        {
            !!member.twitter &&
                <Link href={member.twitter}>

        <Button size={"lg"} className=" aspect-square rounded-full bg-gray-900">
          <Twitter />
        </Button>
                </Link>
        }
      </div>
    </div>
  );
}

export default TeamMemberCard;
