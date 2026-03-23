"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Label, Pie, PieChart } from "recharts";

function ImpactSummary() {
  return (
    <section className="z-10 px-20 py-10 ">
      <h2 className="text-primary pt-10 pb-4 text-center">Impact Summary</h2>
      <div className="grid grid-cols-4 gap-4">
        {[
          { count: 12, title: "Projects completed" },
          { count: 145, title: "Youths trained" },
          { count: 33, title: "Agrepreneurs" },
          { count: 7, title: "Programs" },
        ].map((item) => (
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
                  data={[
                    { name: item.title, value: item.count, fill: "#4ade80" },
                  ]}
                  dataKey="value"
                  radius={60}
                  innerRadius={55}
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
                              {`${item.count} +`}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <p className=" text-center text-2xl font-bold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImpactSummary;
