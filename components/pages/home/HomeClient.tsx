"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, CheckCircle, Triangle } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function HeaderLeftGridCol() {
  useGSAP(() => {
    gsap.to(".headerCassava", {
      y: "+=40%",
      x: "+=10%",
      scale: 1.2,
      opacity: 0,
      rotate: "-=20",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".headerCassava",
        start: "top top",
        pin:true,
        end: "bottom -80%", // Continues progressing well after the header
        scrub: 1, // Ultra-smooth progression
      },
    });
  });
  return (
    <div className="absolute md:left-1/8 md:top-6 inset-0 headerCassava">
      <div className="relative h-full w-full lg:w-1/2 z-50">
        <Image
          src={"/cassava.png"}
          alt="Header Cassava"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export function WhyWorkWithUsImages({
  index,
  image,
}: {
  image: string;
  index: number;
}) {
  useGSAP(() => {
    gsap.from(`#whyUsImage-${index}`, {
      top: -70,
      left: 100,
      scale: 0.5,
      rotate: 20,
      opacity: 0,
      scrollTrigger: {
        trigger: `#whyUsCard-${index}`,
        // pin: true, // pin the trigger element while active
        start: "top 75%", // when the top of the trigger hits the top of the viewport
        end: "top 70%",
        // markers: { startColor: "orange", fontSize: "16px", endColor: "#fffff" },
        // scrub: true,
      },
      duration: 0.5,
    });
  });
  return (
    <Image
      id={`whyUsImage-${index}`}
      className=" rounded-sm"
      src={image}
      alt="Supporting image"
      fill
    />
  );
}

export default HeaderLeftGridCol;

export function OrganisationsListAnimation() {
  useGSAP(() => {
    gsap
      .to(".logoHolder", {
        translateX: "-25%",
        ease: "none",
        duration: 30,
        repeat: -1,
      });
  });
  return null;
}

export function Services({ services }: { services: Service[] }) {
  const [progress, setProgress] = useState(0);
  const getHighlightedIndex = (progress: number) =>
    Math.floor(progress * services.length);
  let highlightedIndex = getHighlightedIndex(progress);
  if (highlightedIndex > services.length - 1) {
    highlightedIndex = services.length - 1;
  }
  useGSAP(() => {
    gsap.to(`#services`, {
      display: "fixed",
      scrollTrigger: {
        trigger: `#services`,
        pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        // end: "bottom bo",
        // markers: { startColor: "orange", fontSize: "16px", endColor: "#fffff" },
        scrub: true,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      },
    });
  });
  return (
    <section
      id="services"
      className="z-10 px-6 lg:px-20 pb-10 pt-12 lg:pt-[100px] h-screen bg-primary-200 relative"
    >
      <h2 className="text-primary  pb-10 pt-4 text-center">Our services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
        <div className=" bg-primary-700 shadow-xl rounded-2xl p-4 lg:p-6 hidden md:block">
          <ul className=" list-disc ">
            {services.map((item, i) => (
              <li
                className={`font-semibold ${i === highlightedIndex ? "text-accent py-3" : "text-primary-100"}`}
              >
                {item.title}
                <Check className=" inline ml-2 size-4" />
              </li>
            ))}
          </ul>
        </div>

        <div>    
          <div className=" relative w-full aspect-video md:aspect-square ">
            <Image
              src={services[highlightedIndex]?.image ?? ""}
              alt="Services image"
              fill
              className="object-cover rounded-2xl slide-in-from-bottom-25 animate-in"
            />
          </div>
        </div>

        
        <div>
          <h4 className=" pb-10 lg:pb-4 text-primary-700">
            {services[highlightedIndex]?.title}
          </h4>
          <ul className="p-2 border-l-2 border-primary-950 list-none! space-y-1">
            {services[highlightedIndex]?.description.map((item) => (
              <li>
                <Triangle className="rotate-90 inline mr-2 size-3 fill-black" />{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
          <div className=" absolute bottom-6 right-7">
            <Button variant={"outline"} className=" rounded-full aspect-square">
              Chat with us
            </Button>
          </div>
      </div>
    </section>
  );
}
