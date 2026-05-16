import CoreValuesSVG from "@/components/CoreValuesSVG";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Facebook,
  Linkedin,
  TwitchIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ProjectsSection from "./ProjectsSection";
import { team } from "@/constants";
import TeamSection from "./TeamSection";

function AboutUsPage() {
  return (
    <>
      <div className=" w-full h-[50vh] pt-20">
        <div className="bg-[url(/IMG-20240810-WA0112.jpg)] bg-cover bg-no-repeat bg-center relative flex justify-center items-center h-full bg-fixed">
          <div className="absolute inset-0 bg-primary-500/50 border"></div>
          <h1 className=" text-white text [-webkit-text-stroke:2px_green] z-10">
            About us
          </h1>
        </div>
      </div>
      <section className=" px-4 md:px-10 lg:px-20 py-10">
        <div className=" flex flex-col lg:flex-row gap-2 items-center justify-center">
          <h2 className=" text-primary">STONEFARMS:</h2>
          <h2 className=" text-primary-700 text-xl uppercase underline text-center lg:text-left">
            Sustainable Organisation Of Transformers Farmers Network
          </h2>
        </div>
      </section>
      <section className=" px-4 md:px-10 lg:px-20 pb-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className=" aspect-square lg:aspect-square relative">
              <Image
                src={"/img-1.jpg"}
                alt="Stonefarms group"
                fill
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
          <div className="flex-4">
            <p id="general">
              We are perfecting agriculture in Cameroon 🇨🇲 by embracing
              ecological, economical, and sustainable approaches to food
              production. Committed to environmental stewardship, biodiversity
              preservation, and climate resilience, we work collaboratively with
              farmers, researchers, and partners to develop innovative solutions
              that enhance soil health, improve livelihoods, and secure a
              greener future for Cameroon and Africa. Through regenerative
              farming, climate-smart practices, and community empowerment, we
              cultivate not just crops, but a thriving ecosystem where people
              and nature coexist in harmony
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className=" p-4 border-r-2 border-primary-200 rounded-sm">
                <h3 id="mission">Mission</h3>
                <p>
                  Founded in 2019 with registration number{" "}
                  <b> Reg N⁰ 011/ARDA/F.34/ALPAS </b>, in conformity with{" "}
                  <b> Law N⁰ 90/053 of 19/12/1990 </b>, <b> STONEFARMS </b> is
                  dedicated to transforming agriculture through ecological and
                  environmentally friendly practices across Cameroon and Africa.
                  We strive to foster sustainability, enhance living standards,
                  and alleviate poverty while actively promoting biodiversity
                  preservation, particularly of endangered species. Committed to
                  climate action, we work to develop resilient farming systems
                  that mitigate the effects of climate change. By equipping
                  youth with modern agricultural skills and innovative
                  techniques, we create opportunities that drive a sustainable
                  and prosperous future for both people and the planet.
                </p>
              </div>
              <div className=" p-4 border-l-2 border-primary-200 rounded-sm">
                <h3 id="vision">Vision</h3>
                <p>
                  Our mission is to develop and promote an agricultural ideology
                  tailored to the unique needs of the African population. We
                  strive to create employment opportunities through sustainable
                  farming practices while empowering local farmers, gardeners,
                  and large-scale producers with the knowledge and tools needed
                  to reduce post-harvest losses. By providing training on
                  production, processing, storage, modern equipment, and
                  resilient crop varieties, we enhance food security, economic
                  stability, and climate resilience across communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" px-4 md:px-20 py-4">
        <h4 className=" text-primary">Core Values</h4>
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <CoreValuesSVG />
          </div>
          <div className=" flex-4 lg:flex-2">
            <p className=" font-medium text-lg pb-2">
              At <span className=" text-primary font-semibold">STONEFARMS</span>
              , we are committed to:
            </p>

            <ul className=" space-y-2 list-disc list-inside">
              <li>
                <b className="text-primary">Precision Engineering: </b>
                We replace guesswork with data-driven agricultural systems and
                internal software to maximize every acre’s sustainable
                potential.
              </li>

              <li>
                <b className="text-primary">Ecological Stewardship: </b>
                Our regenerative techniques protect biodiversity and restore
                soil health, ensuring vibrant landscapes that thrive for future
                generations.
              </li>

              <li>
                <b className="text-primary">Climate Resilience: </b>
                We deploy innovative infrastructure and hardy crop varieties
                designed to maintain consistent yields despite shifting
                environmental conditions.
              </li>

              <li>
                <b className="text-primary">Investor Prosperity: </b>
                Sustainability meets profitability through optimized supply
                chains and reduced post-harvest losses, turning ethical farming
                into stable growth.
              </li>
              <li>
                <b className="text-primary">Generational Impact: </b>
                By empowering Cameroonian youth with modern technical skills, we
                create a permanent shift toward national food security.
              </li>
              <li>
                <b className="text-primary">Radical Transparency: </b>
                Accountability is our foundation, providing stakeholders with
                total visibility through our legal conformity and real-time
                project tracking.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <TeamSection />
      <ProjectsSection />
      <section className=" px-4 md:px-20 py-10 space-y-4">
        <h2 className=" text-primary">Daily activities</h2>
        <ul className=" list-disc  ml-4">
          <li>Provide aid to farmers to boost their productivity.</li>
          <li>Participate and engage in community development.</li>
          <li>
            Service provision for sustainable agriculture and rural development.
          </li>
          <li>
            Educate on green energy(renewable energy) and water conservation
            strategies.
          </li>
          <li>
            Enhance farmers' capacity through training and knowledge sharing.
          </li>
          <li>
            Production of organic products using ecological agricultural inputs.
          </li>
          <li>
            Provide training to rural farmers on the production and
            transformation of organic farm products.
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutUsPage;
