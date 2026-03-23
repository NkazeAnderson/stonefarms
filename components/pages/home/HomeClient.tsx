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
      top: 120,
      left: 100,
      scale: 1.2,
      rotate: -20,
      scrollTrigger: {
        trigger: ".headerCassava",
        // pin: true, // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <div className="absolute left-1/8 top-6 headerCassava ">
      <Image
        src={"/cassava.png"}
        alt="Background image"
        width={180}
        height={100}
      />
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
        translateX: "-100%",
      })
      .duration(20)
      .repeat(-1);
  });
  return null;
}

export function Services({ services }: { services: Service[] }) {
  const [progress, setProgress] = useState(0);
  const getHighlightedIndex = (progress: number) =>
    Math.floor(progress * services.length);
  const highlightedIndex = getHighlightedIndex(progress);
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
      className="z-10 px-20 pb-10 pt-[120px] h-screen bg-primary-200"
    >
      <h2 className="text-primary  pb-10 pt-4 text-center">Our services</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className=" bg-primary-700 shadow-xl rounded-2xl p-6 ">
          <ul className=" list-disc">
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
          <div className=" relative w-full aspect-square ">
            <Image
              src={services[highlightedIndex]?.image ?? ""}
              alt="Services image"
              fill
              className="object-cover rounded-2xl slide-in-from-bottom-25 animate-in"
            />
          </div>
        </div>

        <div className="relative">
          <div className=" absolute bottom-6 right-7">
            <Button variant={"outline"} className=" rounded-full aspect-square">
              Chat with us
            </Button>
          </div>
          <h4 className="pb-4 text-primary-700">
            {services[highlightedIndex]?.title}
          </h4>
          <ul>
            {services[highlightedIndex]?.description.map((item) => (
              <li>
                <Triangle className="rotate-90 inline mr-2 size-3 fill-black" />{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
