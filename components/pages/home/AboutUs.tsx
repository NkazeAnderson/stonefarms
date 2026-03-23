"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume } from "lucide-react";
import React, { useState } from "react";

function AboutUs() {
  const [activeTab, setActiveTab] = useState("general");
  const tabs = ["general", "mission", "vision"];
  return (
    <section className="z-10">
      <h4 className="px-20 text-primary pt-10 pb-4">About us</h4>
      <div className="grid grid-cols-2">
        <div className="px-20">
          <Tabs
            defaultValue="general"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsContent value="general">
              <p>
                <b>Redefining African Agriculture through Engineering.</b>{" "}
                <br />
                Founded in 2019, Stone Farms combines ecological stewardship
                with technical precision. We don't just farm; we architect
                resilient ecosystems that empower communities, protect
                biodiversity, and secure the future of food in Cameroon.
              </p>
              <br />
              <ul>
                <li>
                  Legal: <b>Reg N⁰ 011/ARDA/F.34/ALPAS</b>
                </li>
                <li>Focus: Sustainable Engineering & Climate Action</li>
                <li>Scope: Cameroon & Pan-African Expansion</li>
              </ul>

              <p className="py-4 font-bold text-gray-600">Read more...</p>
            </TabsContent>
            <TabsContent value="mission">
              <p>
                <b>To engineer a self-sustaining Africa.</b> <br />
                We equip the next generation of producers with the modern tools,
                climate-smart techniques, and post-harvest infrastructure needed
                to eliminate waste and maximize economic stability.
              </p>

              <p className="py-4">Read more...</p>
            </TabsContent>
            <TabsContent value="vision">
              <p>
                <b>A continent where nature and industry coexist.</b> <br />
                Our goal is to set the gold standard for regenerative
                farming—transforming depleted landscapes into high-yield,
                biodiverse hubs that alleviate poverty and resist climate
                change.
              </p>

              <p className="py-4">Read more...</p>
            </TabsContent>
            <TabsList className=" gap-2">
              {tabs.map((item) => (
                <TabsTrigger
                  key={item}
                  value={item}
                  className={`capitalize p-4! ${item === activeTab ? " bg-primary! text-white! " : " border border-primary text-primary! "}`}
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="aspect-video relative px-20">
          <video
            src="about-us-presentation.mp4"
            className="h-full object-cover"
            autoPlay
            loop
          ></video>
          <div
            className="absolute inset-0 bg-black/30 
             font-black text-4xl text-center text-transparent  mix-blend-multiply"
          >
            <div className="bg-[url('/LOGO-white-slim.png')] size-full bg-center bg-no-repeat mix-blend-screen bg-contain"></div>
          </div>
          <div className="absolute right-4 top-4">
            <Button className="aspect-square rounded-full">
              <Volume />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
