"use client";
import Logo from "@/components/nav/Logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  CheckCircle,
  CheckCircle2,
  Coins,
  Facebook,
  Instagram,
  Play,
  Star,
  Tractor,
} from "lucide-react";
import Image from "next/image";
import { Label, Pie, PieChart } from "recharts";

export default function Page() {
  return (
    <div>
      {/* header */}
      <div
        className="h-[90vh] relative bg-no-repeat bg-fixed bg-cover "
        style={{
          backgroundImage: "url('/earth-cross-section.png')",
        }}
      >
        <div className="h-full w-full grid grid-cols-2 items-center z-0 ">
          <div className="relative h-full ">
            <div className="fixed left-1/8 top-6 opacity-0">
              <Image
                src={"/cassava.png"}
                alt="Background image"
                width={180}
                height={100}
              />
            </div>
          </div>
          <div className=" p-16 ">
            <div className="a  rounded-2xl bg-green-950/80 p-4 text-green-50 space-y-2">
              <Badge className="bg-green-950 font-semibold uppercase">
                StoneFarms
              </Badge>
              <h2>The Productive Agricultural hub</h2>
              <p>
                We are Cameroon's most skilled organisation of agricultural
                engineers applying sustainable techniques to farm ready to
                market crops while maintaining the ecosystem
              </p>
              <Button className=" mt-7 bg-green-100 text-green-950">
                Our Projects
                <Tractor />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* main */}
      <section className="z-10">
        <h2 className=" text-center text-primary py-10">
          Organisation we have worked with
        </h2>
        <div className="flex overflow-scroll gap-4 items-center">
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return (
                <div key={i}>
                  <div className="w-50">
                    <Image
                      className="rounded-xs"
                      src={"/uds.png"}
                      alt="Uds logo"
                      width={200}
                      height={60}
                    />
                    <p className=" font-bold text-black text-sm text-center">
                      University of Dschang
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <section className="z-10">
        <h4 className="px-20 text-primary pt-10 pb-4">About us</h4>
        <div className="grid grid-cols-2">
          <div className="px-20">
            <Tabs defaultValue="general" className="">
              <TabsContent value="general">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente pariatur molestiae reprehenderit quidem ea harum
                  debitis reiciendis quisquam. Cumque delectus est qui iure,
                  incidunt aliquid doloremque culpa non voluptatum molestiae.
                </p>

                <p className="py-4">Read more...</p>
              </TabsContent>
              <TabsContent value="mission">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente pariatur molestiae reprehenderit quidem ea harum
                  debitis reiciendis quisquam. Cumque delectus est qui iure,
                  incidunt aliquid doloremque culpa non voluptatum molestiae.
                </p>

                <p className="py-4">Read more...</p>
              </TabsContent>
              <TabsContent value="vision">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente pariatur molestiae reprehenderit quidem ea harum
                  debitis reiciendis quisquam. Cumque delectus est qui iure,
                  incidunt aliquid doloremque culpa non voluptatum molestiae.
                </p>

                <p className="py-4">Read more...</p>
              </TabsContent>
              <TabsList>
                <TabsTrigger value="general" className=" text-green-950">
                  General
                </TabsTrigger>
                <TabsTrigger value="mission" className=" text-green-950">
                  Mission
                </TabsTrigger>
                <TabsTrigger value="vision" className=" text-green-950">
                  Vision
                </TabsTrigger>
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
                <Play />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="z-10 px-20">
        <h4 className=" text-primary pt-10 pb-4">
          United Nations Sustainable Development Goals
        </h4>
        <div className=" relative">
          <h6 className="font-bold text-primary absolute top-[155]">
            Our Actions
          </h6>
          <div className="flex gap-10 items-start  overflow-x-scroll snap-x snap-mandatory scroll-p-16">
            {Array(10)
              .fill(0)
              .map((_, i) => {
                return (
                  <div key={i} className="space-y-8 snap-start">
                    <div className="h-[150px] aspect-video relative">
                      <Image src={"/E_SDG_Icons-01.jpg"} alt="SDG Goal" fill />
                    </div>

                    <ul className=" list-disc list-inside text-sm">
                      <li>Empowering farmers economically</li>
                      <li>Creating jobs</li>
                      <li>Promoting financial inclusion</li>
                    </ul>
                  </div>
                );
              })}
          </div>
          <div className="flex gap-4 items-center justify-center py-4">
            {Array(10)
              .fill(0)
              .map((_, i) => {
                return (
                  <div key={i} className="p-1 rounded-full bg-gray-500"></div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="z-10 px-4 md:px-20 py-10">
        <h2 className="text-primary pt-10 pb-4 sticky top-[80px]">
          Why invest with us?
        </h2>
        <div className="relative flex flex-col gap-0 min-h-[80vh]">
          <div className="sticky top-[180px]  rounded-2xl  bg-cyan-100 px-6 py-8 shadow-lg  flex flex-col md:flex-row gap-6">
            <div className="flex-2">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-900">
                Certified Agricultural Engineers
              </h3>
              <p className="mt-4 text-black text-base font-normal">
                Working with us means assurance to your investments.
                <br />
                Working with organisation A, B and C we were able to make sales
                past the original investment in less than X time range
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-40 h-40 bg-orange-800 text-white flex items-center justify-center font-semibold rounded-xl">
                supporting images
              </div>
            </div>
          </div>
          <div className="sticky top-[260px]  rounded-b-2xl rounded-t-none bg-pink-100 px-6 py-8 shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
            <div className="flex-2">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-900">
                Certified Agricultural Engineers
              </h3>
              <p className="mt-4 text-black text-base font-normal">
                Working with us means assurance to your investments.
                <br />
                Working with organisation A, B and C we were able to make sales
                past the original investment in less than X time range
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-40 h-40 bg-orange-800 text-white flex items-center justify-center font-semibold rounded-xl">
                supporting images
              </div>
            </div>
          </div>
          <div className="sticky top-[320px]   bg-red-100 px-6 py-8 shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
            <div className="flex-2">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-900">
                Certified Agricultural Engineers
              </h3>
              <p className="mt-4 text-black text-base font-normal">
                Working with us means assurance to your investments.
                <br />
                Working with organisation A, B and C we were able to make sales
                past the original investment in less than X time range
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-40 h-40 bg-orange-800 text-white flex items-center justify-center font-semibold rounded-xl">
                supporting images
              </div>
            </div>
          </div>
          <div className="sticky top-[400px]  rounded-b-2xl rounded-t-none bg-cyan-100 px-6 py-8 shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
            <div className="flex-2">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-900">
                Certified Agricultural Engineers
              </h3>
              <p className="mt-4 text-black text-base font-normal">
                Working with us means assurance to your investments.
                <br />
                Working with organisation A, B and C we were able to make sales
                past the original investment in less than X time range
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-40 h-40 bg-orange-800 text-white flex items-center justify-center font-semibold rounded-xl">
                supporting images
              </div>
            </div>
          </div>
          <div className="flex py-3 h-56 flex-col justify-end sticky top-[230px] ">
            <Button size={"lg"} className=" self-center">
              Invest with Us
              <Coins />
            </Button>
          </div>
        </div>
      </section>
      <section className="z-10 px-20 pb-10 pt-[100px] h-screen">
        <h2 className="text-primary pt-10 pb-4 text-center">Our services</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className=" border-2 border-green-950 rounded-2xl p-6">
            <ul className=" list-disc">
              <li className=" text-lg font-semibold text-green-950 space-x-1">
                Service 1
                <CheckCircle className=" inline ml-1" />
              </li>
              <li className=" text-lg font-semibold text-green-950">
                Service 2
              </li>
              <li className=" text-lg font-semibold text-green-950">
                Service 3
              </li>
            </ul>
          </div>

          <div>
            <div className=" relative w-full aspect-video">
              <Image
                src={"/soil-analysis.webp"}
                alt="Services image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <h6 className="text-lg font-semibold text-green-950">Service 1</h6>
            <p className="text-gray-600">Description for Service 1</p>
          </div>

          <div className="relative">
            <div className=" absolute -bottom-24 right-7">
              <Button
                variant={"outline"}
                className=" rounded-full aspect-square"
              >
                Chat with us
              </Button>
            </div>
            <div className="flex flex-col h-full py-4 justify-between">
              <div className=" relative w-full h-20 bg-linear-90 from-primary to-black/5 from-5% to-20% bg-clip-text bg-no-repeat bg-center bg-contain rounded-2xl text-center text-5xl font-black text-transparent">
                STONEFARMS
              </div>
              <div className="flex items-end gap-2">
                <div>
                  <div className="w-28 relative aspect-square">
                    <Image
                      src={"/soil-analysis.webp"}
                      alt="Services image"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-28 relative aspect-square">
                    <Image
                      src={"/soil-analysis.webp"}
                      alt="Services image"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-28 relative aspect-square">
                    <Image
                      src={"/soil-analysis.webp"}
                      alt="Services image"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="z-10 px-20 py-10 ">
        <h2 className="text-primary pt-10 pb-4 text-center">Impact Summary</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <ChartContainer
              config={{}}
              className="mx-auto aspect-square max-h-[170px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={[{ name: "Visitorsss", value: 123, fill: "#4ade80" }]}
                  dataKey="value"
                  radius={40}
                  innerRadius={35}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-lg font-semibold"
                            >
                              {"12 +"}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <p className=" text-center text-2xl font-bold">
              Projects Completed
            </p>
          </div>

          <div>
            <ChartContainer
              config={{}}
              className="mx-auto aspect-square max-h-[170px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={[{ name: "Visitorsss", value: 123, fill: "#4ade80" }]}
                  dataKey="value"
                  radius={40}
                  innerRadius={35}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-lg font-semibold"
                            >
                              {"12 +"}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <p className=" text-center text-2xl font-bold">
              Projects Completed
            </p>
          </div>

          <div>
            <ChartContainer
              config={{}}
              className="mx-auto aspect-square max-h-[170px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={[{ name: "Visitorsss", value: 123, fill: "#4ade80" }]}
                  dataKey="value"
                  radius={40}
                  innerRadius={35}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-lg font-semibold"
                            >
                              {"12 +"}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <p className=" text-center text-2xl font-bold">
              Projects Completed
            </p>
          </div>

          <div>
            <ChartContainer
              config={{}}
              className="mx-auto aspect-square max-h-[170px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={[{ name: "Visitorsss", value: 123, fill: "#4ade80" }]}
                  dataKey="value"
                  radius={40}
                  innerRadius={35}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-lg font-semibold"
                            >
                              {"12 +"}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <p className=" text-center text-2xl font-bold">
              Projects Completed
            </p>
          </div>
        </div>
      </section>
      <section className="z-10 px-20 py-10 ">
        <h4 className="text-primary pt-10 pb-4 ">Testimonials</h4>
        <div className="flex gap-6">
          <div className="flex">
            <div className="w-28 h-28 rounded-full relative">
              <Image
                src={"/faceHolder.png"}
                alt="Testimonial 1"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="ml-4 max-w-[25vw]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="inline text-yellow-500 fill-yellow-500 stroke-yellow-500"
                  />
                ))}
              <p className="text-gray-600 italic">
                "This company has exceeded our expectations in every way. Their
                attention to detail and commitment to excellence is unmatched."
              </p>
              <p className="font-bold text-lg">John Doe</p>
              <p className="text-gray-600">CEO, Company A</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-28 h-28 rounded-full relative">
              <Image
                src={"/faceHolder.png"}
                alt="Testimonial 1"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="ml-4 max-w-[25vw]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="inline text-yellow-500 fill-yellow-500 stroke-yellow-500"
                  />
                ))}
              <p className="text-gray-600 italic">
                "This company has exceeded our expectations in every way. Their
                attention to detail and commitment to excellence is unmatched."
              </p>
              <p className="font-bold text-lg">John Doe</p>
              <p className="text-gray-600">CEO, Company A</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-28 h-28 rounded-full relative">
              <Image
                src={"/faceHolder.png"}
                alt="Testimonial 1"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="ml-4 max-w-[25vw]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="inline text-yellow-500 fill-yellow-500 stroke-yellow-500"
                  />
                ))}
              <p className="text-gray-600 italic">
                "This company has exceeded our expectations in every way. Their
                attention to detail and commitment to excellence is unmatched."
              </p>
              <p className="font-bold text-lg">John Doe</p>
              <p className="text-gray-600">CEO, Company A</p>
            </div>
          </div>
        </div>
      </section>
      <section className="z-10 px-20 py-10 bg-gray-300">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <Logo />
            <div>
              <p className="text-gray-600 italic">
                "Cameroon's agricultural Hub"
              </p>

              <div className="flex">
                <Button>
                  <Instagram />
                </Button>
                <Button>
                  <Facebook />
                </Button>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
            </ul>
          </div>
          <div>
            <h6>Sign Up To Our Newsletter</h6>
            <Input placeholder="email" />
          </div>
        </div>
      </section>
    </div>
  );
}
