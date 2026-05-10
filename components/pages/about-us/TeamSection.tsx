"use client"

import TeamMemberCard from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { team } from "@/constants";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function TeamSection() {

    const [hasExpanded, setHasExpanded] = React.useState(false);
    
    const handleExpand = () => {
        setHasExpanded(!hasExpanded);
    }
    return (
       <section className=" ">
        <div className=" flex flex-col items-center py-12">
          <div className=" relative">
            <div className=" absolute -top-6 left-0 py-1 px-2 rounded-full bg-primary-300">
              <p className="font-semibold text-sm italic leading-none">
                Team <CheckCircle className=" inline text-accent " size={12} />
              </p>
            </div>
            <h2 className=" text-primary-500"> Who Do We have On Board?</h2>
          </div>
        </div>
        <div className=" px-4 md:px-20 py-10 bg-primary-100 grid grid-cols-1 md:grid-cols-3 gap-16">
          {team
            .slice(0, hasExpanded ? team.length : 3)
            .map((item, i) => (
              <TeamMemberCard key={i} member={item}/>
            ))}
        </div>
        <div className="flex items-center justify-center py-4 bg-primary-100">
          <Button className=" bg-gray-600 text-gray-900" onClick={handleExpand}>
            {hasExpanded ? "View Less Members" : "View More Members"}
          </Button>
        </div>
      </section>
    );
}