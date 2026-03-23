import { whyWorkWithUs } from "@/constants";
import React from "react";
import { WhyWorkWithUsImages } from "./HomeClient";
import { Button } from "@/components/ui/button";
import { Tractor } from "lucide-react";

function WhyInvest() {
  return (
    <section className="z-10 px-4 md:px-20 py-10">
      <h2 className="text-primary pt-10 pb-4 sticky top-[80px]">
        Why invest with us?
      </h2>
      <div className="relative flex flex-col gap-6 min-h-[80vh]">
        {whyWorkWithUs.map((item, i) => (
          <div
            key={`whyworkwithus-${i}`}
            id={`whyUsCard-${i}`}
            className={`sticky  rounded-2xl  px-6 py-8 shadow-lg  flex flex-col md:flex-row gap-6 ${
              i == 0
                ? "bg-primary-50"
                : i == 1
                  ? "bg-primary-100"
                  : i == 2
                    ? "bg-primary-200"
                    : "bg-primary-300"
            }`}
            style={{
              top: 180 + i * 80,
            }}
          >
            <div className="flex-2">
              <h3 className="font-bold text-cyan-900">{item.heading}</h3>
              <p className="mt-4 text-gray-900 text-base font-normal">
                {item.description}
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-40 h-40 relative rounded-xl">
                <WhyWorkWithUsImages image={item.image} index={i} />
              </div>
            </div>
          </div>
        ))}

        <div className="flex py-3 h-56 flex-col justify-end sticky top-[230px] ">
          <Button
            size={"lg"}
            className=" self-center bg-accent text-primary-800 font-semibold"
          >
            Invest with Us
            <Tractor />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WhyInvest;
