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

function AboutUsPage() {
  return (
    <>
      <div className=" w-full h-[75vh] pt-20">
        <div className="bg-[url(/img-1.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-center h-full bg-fixed">
          <h1 className=" text-white text [-webkit-text-stroke:2px_green] ">
            About us
          </h1>
        </div>
      </div>
      <section className=" px-20 py-10">
        <div className=" flex gap-2 items-center justify-center">
          <h2 className=" text-primary">STONEFARMS:</h2>
          <h2 className=" text-primary-700 text-xl uppercase underline">
            Sustainable Organisation Of Transformers Farmers Network
          </h2>
        </div>
      </section>
      <section className="px-20 py-10">
        <div className="flex gap-4">
          <div>
            <div className="w-[20vw] aspect-square relative">
              <Image src={"/img-1.jpg"} alt="Stonefarms group" fill />
            </div>
          </div>
          <div>
            <p>
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
            <div className="grid grid-cols-2">
              <div className=" p-4 border-r-2 border-primary-200 rounded-sm">
                <h3>Mission</h3>
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
                <h3>Vision</h3>
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
      <section className=" px-20 py-4">
        <h4 className=" text-primary">Core Values</h4>
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <CoreValuesSVG />
          </div>
          <div className="flex-2">
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
        <div className=" px-20 py-10 bg-primary-100 grid grid-cols-3 gap-16">
          {Array(3)
            .fill(0)
            .map((item) => (
              <TeamMemberCard />
            ))}
        </div>
        <div className="flex items-center justify-center py-4 bg-primary-100">
          <Button className=" bg-gray-600 text-gray-900">
            View More Members
          </Button>
        </div>
      </section>
      <section className=" py-10">
        <h2 className=" px-20 py-10">Some Recent Projects</h2>
        <div className="flex gap-6 px-4 flex-nowrap overflow-x-auto">
          <div className=" flex flex-col justify-between">
            <div className="w-[47vw] relative aspect-video">
              <Image
                src={"/feasibility.jpg"}
                alt="Project Image"
                fill
                className="rounded-sm"
              />
            </div>
            <div className=" flex justify-between items-center py-2">
              <h5 className=" font-bold">Cassava Project Bandjoun</h5>
              <ArrowRight />
            </div>
          </div>
          <div className=" flex flex-col justify-between">
            <div className="w-[40vw] relative aspect-video">
              <Image
                src={"/feasibility.jpg"}
                alt="Project Image"
                fill
                className="rounded-sm"
              />
            </div>
            <div className=" flex justify-between items-center py-2">
              <h5 className=" font-bold">Cassava Project Bandjoun</h5>
              <ArrowRight />
            </div>
          </div>
          <div>
            <div className="w-[45vw] relative aspect-video">
              <Image
                src={"/feasibility.jpg"}
                alt="Project Image"
                fill
                className="rounded-sm"
              />
            </div>
            <div className=" flex justify-between items-center py-2">
              <h5 className=" font-bold">Cassava Project Bandjoun</h5>
              <ArrowRight />
            </div>
          </div>
          <div>
            <div className="w-[45vw] relative aspect-video">
              <Image
                src={"/feasibility.jpg"}
                alt="Project Image"
                fill
                className="rounded-sm"
              />
            </div>
            <div className=" flex justify-between items-center py-2">
              <h5 className=" font-bold">Cassava Project Bandjoun</h5>
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
      <section className=" px-20 py-10 space-y-4">
        <h2 className=" text-primary">Daily activities</h2>
        <ul className=" list-disk  ml-4">
          <li>Provide aid to farmers to boast their productivity.</li>
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
