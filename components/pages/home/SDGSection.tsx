"use client";
import { sdgs } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

function SDGSection() {
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2]);
  return (
    <section className="z-10 px-20 bg-primary-50 my-4">
      <div className="flex pt-16 pb-10 items-center justify-between">
        <h4 className=" text-primary ">
          Alignment With United Nations Sustainable Development Goals
        </h4>
        <div className="h-12 aspect-video relative">
          <Image
            src={"/Flag_of_the_United_Nations.png"}
            alt="United nations flag"
            fill
          />
        </div>
      </div>
      <div className=" relative">
        <div
          className="flex gap-10 items-start  overflow-x-scroll snap-x snap-mandatory scroll-p-0 pb-10"
          onScroll={(e) => {
            const fraction =
              e.currentTarget.scrollLeft /
              (e.currentTarget.scrollWidth - e.currentTarget.clientWidth || 1);
            const start = Math.floor(fraction * (sdgs.length - 3));
            setVisibleIndices([start, start + 1, start + 2]);
          }}
        >
          {sdgs.map((item, i) => {
            return (
              <div
                key={i}
                className="space-y-4 snap-start p-2 border rounded-md"
              >
                <div className="h-37 aspect-video relative">
                  <Image src={item.image} alt="SDG Goal" fill />
                </div>
                <h6 className="font-medium text-sm! text-primary-50 bg-primary-500 rounded-md  px-1 self-start inline">
                  Our Actions
                </h6>
                <ul className=" list-disc list-inside text-sm">
                  {item.actions.map((action) => (
                    <li>{action}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 items-center justify-center py-4">
          {sdgs.map((_, i) => {
            return (
              <div
                key={i}
                className={`p-1 circles rounded-full ${visibleIndices.includes(i) ? "bg-primary" : "bg-gray-500"}`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SDGSection;
